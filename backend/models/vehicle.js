const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const vehicleSchema=new Schema({
  registration:{
    type:String,
    required:true
  }
})

module.exports=mongoose.model('Vehicle',vehicleSchema);
