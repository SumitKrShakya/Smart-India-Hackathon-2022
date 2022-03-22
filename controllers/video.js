const videoModel = require("../models/video");
const { calculateDateDiff } = require("../utils/timeUtils");
exports.uploadVideo = async (req,res,next) => {
    let { startTime , endTime } = req.body;
    console.log(req.file);
    let newVideo = new videoModel({
        recording_url : req.file.path,
        startTime,
        endTime,
        videoInterval:calculateDateDiff(startTime,endTime)
    });
    await newVideo.save();
    return res.status(200).json({
        message : "recording saved"
    });
}