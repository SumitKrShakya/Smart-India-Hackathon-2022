const Vehicle=require('../models/vehicle.js');
const nodemailer=require('nodemailer');
const sendgridTransport=require("nodemailer-sendgrid-transport");
const transporter=nodemailer.createTransport(sendgridTransport({
  auth:{

    api_key:"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"
  }
}))




exports.verify=(req,res,next)=>{
  registrationNo=req.body.registration;
  // console.log(registrationNo);
  Vehicle.findOne({registration:registrationNo}).then(result=>{
    if(!result){
      transporter.sendMail({
        to:"sukhvinder26112000@gmail.com",
        from:"vehicle_detection@outlook.com",
        subject:"Alert !!!",
        text:"A vehicle with False Number Plate was found at Ashram Chowk at 10.00 am"

    }).then(info=>{
      console.log("sent");
    }).catch(err=>{
      console.log(err);
    })
      res.status(404).json("Alert: False Number plate!!!");
    }
    res.status(200).json("Ok");
  }).catch(err=>{
    console.log(err);
  })
}
exports.sendQuery = async (req,res,next) => {
  let { phoneNumber, email , query , name , companyName } = req.body;
 let message = `
 phoneNumber : ${phoneNumber}\n
 email : ${email}\n
 query : ${query}\n
 name : ${name}\n
 company Name : ${companyName}
 `; 
 transporter.sendMail({
  to:"sukhvinder26112000@gmail.com",
  from:"vehicle_detection@outlook.com",
  subject:"Alert !!!",
  text:message
 })
 return res.status(200).json({
   message:"query send successfully"
 })
}