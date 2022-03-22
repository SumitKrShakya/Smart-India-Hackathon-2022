const jwt=require('jsonwebtoken');
const User=require('../models/user.js')



exports.login=(req,res,next)=>{
  const email=req.body.email;
  const password=req.body.password;
  User.findOne({email:email}).then(user=>{
    if(!user){
      res.status(404).json("No user with given email");
    }
    loadedUser=user;
    return password===user.password;
  }).then(isEqual=>{
    if(!isEqual){
      res.status(401).json("Please Enter Correct password");
    }
    const token=jwt.sign({email:loadedUser.email,userId:loadedUser._id.toString()},'secretkey',{expiresIn:'1h'});
    res.status(200).json({token:token,userId:loadedUser._id.toString()});
  }).catch(err=>{
    console.log(err);
    }

  )

}
