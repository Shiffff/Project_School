const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "application/pdf": "pdf",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "content");
  },

  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, file.fieldname + name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).fields([
  { name: "content", maxCount: 1 },
  { name: "picture", maxCount: 1 },
]);
