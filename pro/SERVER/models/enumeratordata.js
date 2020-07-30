const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enumeratorSchema = new Schema({
    name:String,
    username:String,
    password:String,
    area:String,
    role:String
});
module.exports=mongoose.model('enumerator',enumeratorSchema,'enumeratordatas')