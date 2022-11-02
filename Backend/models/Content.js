const mongoose = require("mongoose");

const themeSchema = mongoose.Schema(
  {
    userThemeId: { type: String, require: true },
    themeTitle: { type: String, trim: true, maxlength: 500 },
    themedescription: { type: String },
    class: { type: String },
    chapter: {
      type: [
        {
          userChapterId: { type: String, require: true },
          chapterTitle: { type: String, trim: true, maxlength: 500 },
          chapterdescription: { type: String, trim: true, maxlength: 500 },
          timestamp: Number,
          lessons: {
            type: [
              {
                userLessonId: { type: String, require: true },
                lessonTitle: { type: String, trim: true, maxlength: 500 },
                lessondescription: { type: String, trim: true, maxlength: 500 },
                content: { type: String },
                contentPic: { type: String },
                timestamp: Number,
              },
            ],
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Content", themeSchema);
