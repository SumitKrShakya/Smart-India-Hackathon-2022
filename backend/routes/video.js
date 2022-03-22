const express = require("express");
const { uploadVideo } = require("../controllers/video");
const router = express.Router();

router.post("/storeRecording",uploadVideo);

module.exports = router;