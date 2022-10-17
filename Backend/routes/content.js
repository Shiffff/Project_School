const express = require("express");
const router = express.Router();
const contentCtrl = require("../controllers/content");
const auth = require("../middleware/auth");

router.post("/theme", auth, contentCtrl.createtheme);
router.get("/theme", auth, contentCtrl.getAllTheme);
router.put("/theme/:id", auth, contentCtrl.modifytheme);
router.delete("/theme/:id", auth, contentCtrl.deletetheme);

router.post("/chapter/:id", contentCtrl.createChapter);
router.put("/chapter/:id", contentCtrl.modifyChapter);
router.put("/deletechapter/:id", contentCtrl.deleteChapter);

router.post("/lessons/:id", contentCtrl.createLessons);
router.put("/lessons/:id", contentCtrl.modifyLessons);
router.put("/deletelessons/:id", contentCtrl.deleteLessons);

module.exports = router;
