const express = require("express");
const router = express.Router();
const contentCtrl = require("../controllers/content");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

router.post("/theme", auth, contentCtrl.createtheme);
router.get("/theme", auth, contentCtrl.getAllTheme);
router.put("/theme/:id", auth, contentCtrl.modifytheme);
router.delete("/theme/:id", auth, contentCtrl.deletetheme);

router.post("/chapter/:id", contentCtrl.createChapter);
router.put("/chapter/:id", contentCtrl.modifyChapter);
router.put("/deletechapter/:id", contentCtrl.deleteChapter);

router.post("/lessons/:id", multer, contentCtrl.createLessons);
router.put("/lessons/:id", multer, contentCtrl.modifyLessons);
router.put("/deletelessons/:id", multer, contentCtrl.deleteLessons);
router.put("/getlessons/:id", contentCtrl.getOneLesson);

module.exports = router;
