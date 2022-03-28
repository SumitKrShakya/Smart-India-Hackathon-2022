const { spawn } = require("child_process");
const videoModel = require("../models/video");
const { imgRecog } = require("../utils/ocrText");
const { verify } = require("./vehicle");
const path = require("path");
const detectPlate = async (req,res,next) => {
    let {recordingId} = req.body;
    let  videoData = await videoModel.findById(recordingId);
    // run model
    const pyProg = spawn('python', [path.join(__dirname,"..","pyModel.py"),videoData.recording_url]);
    pyProg.stdout.on("data", async function(data){
        // ocr of image
        let plateNumber = await imgRecog(data);
        // match with db
        req.registrationNo = plateNumber;
        verify(req,res,next);
    });
    pyProg.stderr.on("data",async (data) => {
        console.log(data.toString());
    })
}
// detectPlate({
//     body : {
//         recordingId : "6240ae6f0ea7245671a0f762"
//     }
// })
module.exports = detectPlate;
