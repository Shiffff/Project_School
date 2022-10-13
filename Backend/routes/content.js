const express = require("express");
const router = express.Router();
const contentCtrl = require("../controllers/content");
const auth = require("../middleware/auth");

router.post("/theme", auth, contentCtrl.createtheme);
router.get("/theme", auth, contentCtrl.getAllTheme);
router.delete("/theme/:id", auth, contentCtrl.deletetheme);
router.put("/theme/:id", auth, contentCtrl.modifytheme);

module.exports = router;
