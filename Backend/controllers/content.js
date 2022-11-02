const Content = require("../models/Content");

exports.createtheme = (req, res, next) => {
  if (req.auth.isAdmin === true) {
    const newTheme = new Content({
      userThemeId: req.auth.userId,
      themeTitle: req.body.themeTitle,
      themedescription: req.body.themedescription,
      class: req.body.class,
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

exports.createChapter = (req, res, next) => {
  Content.updateOne(
    { _id: req.params.id },
    {
      $push: {
        chapter: {
          userChapterId: req.body.userChapterId,
          chapterTitle: req.body.chapterTitle,
          chapterdescription: req.body.chapterdescription,
        },
      },
    }
  )
    .then(() => res.status(200).json({ message: "Chapitre ajouté !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyChapter = (req, res, next) => {
  Content.findById(req.params.id, (err, data) => {
    const chapterOne = data.chapter.find((chapter) =>
      chapter._id.equals(req.body.chapterId)
    );

    if (!chapterOne) return res.status(404).send("Chapitre non trouvé");
    chapterOne.chapterTitle = req.body.chapterTitle;
    chapterOne.chapterdescription = req.body.chapterTitle;

    return data.save((err) => {
      if (!err) return res.status(200).send(data);
      return res.status(500).send(err);
    });
  });
};

exports.deleteChapter = (req, res) => {
  Content.findByIdAndUpdate(req.params.id, {
    $pull: {
      chapter: {
        _id: req.body.chapterId,
      },
    },
  })
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err }));
};

exports.createLessons = (req, res, next) => {
  Content.findById(req.params.id, (err, data) => {
    const chapterOne = data.chapter.find((chapter) =>
      chapter._id.equals(req.body.chapterId)
    );
    if (!chapterOne) return res.status(404).send("Chapitre non trouvé");
    chapterOne.lessons.push({
      userLessonId: req.body.userLessonId,
      lessonTitle: req.body.lessonTitle,
      lessondescription: req.body.lessondescription,
      content: `${req.protocol}://${req.get("host")}/content/${
        req.file.filename
      }`,
    });
    return data.save((err) => {
      if (!err) return res.status(200).send(data);
      return res.status(500).send(err);
    });
  });
};

exports.modifyLessons = (req, res, next) => {
  Content.findById(req.params.id, (err, data) => {
    const chapterOne = data.chapter.find((chapter) =>
      chapter._id.equals(req.body.chapterId)
    );
    const lessonOne = chapterOne.lessons.find((lesson) =>
      lesson._id.equals(req.body.lessonId)
    );

    if (!chapterOne) return res.status(404).send("Chapitre non trouvé");
    lessonOne.lessonTitle = req.body.lessonTitle;
    lessonOne.lessondescription = req.body.lessondescription;
    lessonOne.content = req.body.content;

    return data.save((err) => {
      if (!err) return res.status(200).send(data);
      return res.status(500).send(err);
    });
  });
};

exports.deleteLessons = (req, res, next) => {
  Content.findById(req.params.id, (err, data) => {
    const chapterOne = data.chapter.find((chapter) =>
      chapter._id.equals(req.body.chapterId)
    );

    if (!chapterOne) return res.status(404).send("Chapitre non trouvé");
    chapterOne.lessons.pull({
      _id: req.body.lessonId,
    });

    return data.save((err) => {
      if (!err) return res.status(200).send(data);
      return res.status(500).send(err);
    });
  });
};
