const mongoose = require("mongoose") 
const peacockSchema = mongoose.Schema({ 
 feathers: String, 
 legs:{
    type:Number,
    min: 4,
    max: 12 },
 gender: String
}) 
 
module.exports = mongoose.model("Peacock", 
peacockSchema) 