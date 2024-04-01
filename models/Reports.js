const mongoose = require("mongoose")

const ReportsSchema = new mongoose.Schema({
    email:{type:String,required:true},
    report:{type:String,required:true},
})
module.exports = mongoose.model("reports",ReportsSchema)