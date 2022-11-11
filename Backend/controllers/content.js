const Content = require("../models/Content");
const fs = require("fs");

exports.createtheme = (req, res) => {
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

exports.modifytheme = (req, res) => {
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

exports.deletetheme = (req, res) => {
  if (req.auth.isAdmin === true) {
    Content.findById(req.params.id, (err, data) => {
      if (data.chapter[0]) {
        return res.status(404).send("Veuillez d'abord supprimez les chapitre");
      }

      Content.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "theme supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
    });
  }
};

exports.createChapter = (req, res) => {
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

exports.modifyChapter = (req, res) => {
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
  Content.findById(req.params.id, (err, data) => {
    const chapterOne = data.chapter.find((chapter) =>
      chapter._id.equals(req.body.chapterId)
    );
    if (chapterOne.lessons[0]) {
      return res.status(404).send("Veuillez d'abord supprimez les lessons");
    }
    Content.findByIdAndUpdate(req.params.id, {
      $pull: {
        chapter: {
          _id: req.body.chapterId,
        },
      },
    })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  });
};
exports.createLessons = (req, res) => {
  Content.findById(req.params.id, (err, data) => {
    const chapterOne = data.chapter.find((chapter) =>
      chapter._id.equals(req.body.chapterId)
    );
    if (!chapterOne) return res.status(404).send("Chapitre non trouvé");
    chapterOne.lessons.push({
      userLessonId: req.body.userLessonId,
      lessonTitle: req.body.lessonTitle,
      lessondescription: req.body.lessondescription,
      picture: `${req.protocol}://${req.get("host")}/content/${
        req.files.picture[0].filename
      }`,
      content: `${req.protocol}://${req.get("host")}/content/${
        req.files.content[0].filename
      }`,
    });
    return data.save((err) => {
      if (!err) return res.status(200).send(data);
      return res.status(500).send(err);
    });
  });
};

exports.modifyLessons = (req, res) => {
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
    lessonOne.picture = lessonOne.picture;
    lessonOne.content = lessonOne.content;

    return data.save((err) => {
      if (!err) return res.status(200).send(data);
      return res.status(500).send(err);
    });
  });
};

exports.deleteLessons = (req, res) => {
  Content.findById(req.params.id, (err, data) => {
    const chapterOne = data.chapter.find((chapter) =>
      chapter._id.equals(req.body.chapterId)
    );

    if (!chapterOne) return res.status(404).send("Chapitre non trouvé");

    const lessonOne = chapterOne.lessons.find((lesson) =>
      lesson._id.equals(req.body.lessonId)
    );

    const filenameContent = lessonOne.content.split("/content/")[1];
    fs.unlink(`content/${filenameContent}`, () => {
      console.log("contentSupr");
    });
    const filenamePicture = lessonOne.picture.split("/content/")[1];
    fs.unlink(`content/${filenamePicture}`, () => {
      console.log("pictureSupr");
    });

    chapterOne.lessons.pull({
      _id: req.body.lessonId,
    });
    return data.save((err) => {
      if (!err) return res.status(200).send(data);
      return res.status(500).send(err);
    });
  });
};

exports.getOneLesson = (req, res) => {
  console.log(req.body);
  Content.findById(req.params.id, (err, data) => {
    const chapterOne = data.chapter.find((chapter) =>
      chapter._id.equals(req.body.chapterId)
    );
    const lessonOne = chapterOne.lessons.find((lesson) =>
      lesson._id.equals(req.body.lessonId)
    );

    if (!chapterOne) return res.status(404).send("Chapitre non trouvé");

    return data.save((err) => {
      if (!err) return res.status(200).send(lessonOne);
      return res.status(500).send(err);
    });
  });
};

exports.getAllTheme = (req, res) => {
  Content.find()
    .then((content) => res.status(200).json(content))
    .catch((error) => res.status(400).json({ error }));
};
