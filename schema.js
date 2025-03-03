const mongoose = require("mongoose");

const fitnesstracker= new mongoose.Schema({

  user: { type: String, required: true },
  data : { type: String,  required:true},
duaration: { type: Number, required: true },
caloriesBurned: {type: Number},
 
exercies:{}
 


});

module.exports = mongoose.model("fitness tracker", fitnesstrackerSchema);


