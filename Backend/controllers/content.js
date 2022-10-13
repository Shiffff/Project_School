const Content = require("../models/Content");

exports.createtheme = (req, res, next) => {
  if (req.auth.isAdmin === true) {
    const newTheme = new Content({
      userThemeId: req.auth.userId,
      themeTitle: req.body.themeTitle,
      themedescription: req.body.themedescription,
    });
    const theme = newTheme
      .save()
      .then(() => res.status(201).json({ message: "Theme créé !" }))
      .catch((error) => res.status(400).json({ error }));
  }
};

exports.modifytheme = (req, res, next) => {
  console.log(req.body);
  const theme = Content.findById(req.params.id);
  if (req.auth.isAdmin === true) {
    theme
      .updateOne({
        themeTitle: req.body.themeTitle,
        themedescription: req.body.themedescription,
      })
      .then(() => res.status(201).json({ message: "Theme modifié !" }))
      .catch((error) => res.status(400).json({ error }));
  }
};

exports.deletetheme = (req, res, next) => {
  if (req.auth.isAdmin === true) {
    Content.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "theme supprimé !" }))
      .catch((error) => res.status(400).json({ error }));
  }
};

exports.getAllTheme = (req, res, next) => {
  Content.find()
    .then((content) => res.status(200).json(content))
    .catch((error) => res.status(400).json({ error }));
};
