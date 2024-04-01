const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    bookId:{type:String,required:true},
    name:{type:String,required:true},
    message:{type:String,required:true},
    star:{type:String,required:true},
})
module.exports = mongoose.model("reviewDetail",ReviewSchema)