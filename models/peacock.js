const mongoose = require("mongoose") 
const peacockSchema = mongoose.Schema({ 
 feathers: String, 
 legs: Number, 
 gender: String
}) 
 
module.exports = mongoose.model("Peacock", 
peacockSchema) 