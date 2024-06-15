const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    name:{type:String,required:true},
    author:{type:String,required:true},
    genre:{type:String,required:true},
    img:{type:String},
    desc:{type:String}
})
module.exports = mongoose.model("bookDetail",BookSchema)