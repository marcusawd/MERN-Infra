const express = require("express");
const router = express.Router();
const notesCtrl = require("../../controllers/api/notesCtrl");

router.post("/", notesCtrl.create);

module.exports = router;
