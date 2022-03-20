const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const crypto = require("crypto");
app.use(cors({
    origin : "*"
}));

app.use(express.json());
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,"public")
    },
    filename:(req, file, cb) => {
        let hash = crypto.createHash('md5').update(file.originalname).digest('hex');
        cb(null,file.originalname + hash);
    }
})
app.use(multer({
    storage:storage
}).single("video"));

app.post("/storeRecording",(req,res,next) => {
    let { recordingId } = req.body;
    console.log(recordingId);
    console.log(req.file);
    return res.status(200).json({
        message : "recording saved"
    });
})

app.listen(8080);