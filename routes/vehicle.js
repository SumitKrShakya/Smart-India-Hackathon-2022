const express=require('express');
const router=express.Router();
const vehicleController=require('../controllers/vehicle.js');

router.post("/verify",vehicleController.verify);
router.post("/sendQuery",vehicleController.sendQuery);
module.exports=router;
