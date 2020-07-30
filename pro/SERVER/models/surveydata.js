const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
     name:String,
     age:Number,
     tcno:String,
     address:String,
     aadar:Number,
     areacode:String,
     description:String
});
module.exports=mongoose.model('survey',surveySchema,'surveydatas')