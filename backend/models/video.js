const mongoose = require("mongoose");
const schema = mongoose.Schema;

const videoSchema = new schema({
    recording_url : {
        type : String,
        required:true
    },
    videoInterval : {
        type : Number,
        required:true
    },
    startTime : {
        type : Date,
        required:true
    },
    endTime : {
        type : Date,
        required:true
    }
});
module.exports = mongoose.model("video",videoSchema);