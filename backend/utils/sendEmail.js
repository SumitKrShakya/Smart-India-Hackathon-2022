const nodemailer = require("nodemailer");
const emailTransport = nodemailer.createTransport({
    service:"gmail",
    auth : {
        user:"gmailId",
        pass:"gmailIdPass"
    }
});
const alertMail = (plateNumber , imageUrl , recieverEmail) => {
    try {
        let message = `
            <html>
                <title>Plate Detection Failure Alert Mail</title>
                <body>
                    <h1>Plate Detection Failure Alert Mail</h1>
                    <div>
                        A car having plate number ${plateNumber} passed through our cctv is having a fake number plate, The photograph of this car is ${imageUrl}
                    </div>
                    <div>
                        Hope you like our service
                    </div>
                </body>
            </html>
        `;
        emailTransport.sendMail({
            subject:"Plate Detection Failure Alert Mail",
            from:"gmailId",
            to:recieverEmail,
            html:message
        },(err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("success");
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    alertMail:alertMail
}