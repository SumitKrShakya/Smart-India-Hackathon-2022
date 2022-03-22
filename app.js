const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const crypto = require("crypto");
const videoRouter = require("./routes/video");
const loginRoutes=require("./routes/login");
const vehicleRoutes=require("./routes/vehicle");
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
app.use(loginRoutes);
app.use("/vehicle",vehicleRoutes);
mongoose.connect("mongodb+srv://sukhvinder:ankit1234@cluster0.zbups.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => {
    console.log("connected");
    app.listen(8080);
}).catch(err => {
    console.log(err);
})
