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

exports.getOneUser = (req, res, next) => {
  User.findOne({ _id: req.auth.userId })
    .select("-password")
    .then((User) => {
      res.status(200).json(User);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllUser = (req, res, next) => {
  User.find({ isAdmin: "false" })
    .select("-password")
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};
