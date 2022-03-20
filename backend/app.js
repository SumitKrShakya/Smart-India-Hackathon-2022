const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const crypto = require("crypto");
const videoRouter = require("./routes/video");
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

app.use(videoRouter);

mongoose.connect()
.then(() => {
    app.listen(8080);
}).catch(err => {
    console.log(err);
})