const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const areaSchema = new Schema({
    areaname:String,
    areacode:String,
});
module.exports=mongoose.model('area',areaSchema,'areadatas')