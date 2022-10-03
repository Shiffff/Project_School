const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  console.log(req.body);
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        userName: req.body.userName,
        password: hash,
        name: req.body.name,
        firstName: req.body.firstName,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ loginName: req.body.loginName })
    .then((user) => {
      if (user === null) {
        res
          .status(401)
          .json({ message: "Paire identifiant/mot de passe incorrecte" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              res
                .status(401)
                .json({ message: "Paire identifiant/mot de passe incorrecte" });
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                  { userId: user._id, isAdmin: user.isAdmin },
                  `${process.env.KEY}`,
                  { expiresIn: "24h" }
                ),
              });
            }
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

/************************************************************ */

exports.getOneUser = (req, res, next) => {
  //get une seul sauce éxistantes
  User.findOne({ _id: req.auth.userId })
    .select("-password") // find dans la base de données le schema qui correspond a l'id qui ce trouve dans la requete
    .then((User) => {
      res.status(200).json(User);
    }) // renvoie en format json la reponse (all schema) qui sera traduite côté front
    .catch((error) => res.status(400).json({ error }));
};

exports.updateUser = (req, res, next) => {
  if (req.auth.userId === req.params.id) {
    const userObject = req.file
      ? {
          ...req.body.user,
          imageUrl: `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`,
        }
      : { ...req.body };

    User.updateOne(
      { _id: req.params.id },
      { ...userObject, _id: req.params.id }
    )
      .then(() => {
        res.status(200).json({ message: "Informations utilisateur modifiées" });
      })
      .catch((err) => res.status(404).json({ err }));
  } else {
    return res.status(403).json("Vous n'êtes pas authorisé");
  }
};

exports.getAllUser = (req, res, next) => {
  User.find()
    .select("-password")
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
  if (req.auth.userId === req.params.id) {
    User.findOne({ _id: req.params.id }).then((user) => {
      if (user.imageUrl) {
        const filename = user.imageUrl.split("/images/")[1];
        if (filename === "user_default.jpg") {
          User.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "User supprimé !" }))
            .catch((error) => res.status(400).json({ error }));
        } else {
          const filename = user.imageUrl.split("/images/")[1];
          fs.unlink(`images/${filename}`, () => {
            // Supprime le post sélectionné
            User.deleteOne({ _id: req.params.id })
              .then(() => res.status(200).json({ message: "User supprimé !" }))
              .catch((error) => res.status(400).json({ error }));
          });
        }
      }
    });
  } else {
    return res.status(403).json("Vous n'êtes pas authorisé");
  }
};
