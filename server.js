const express = require("express")
const mongoose=require("mongoose")
const cors = require("cors")
const BookDetail = require("./routes/bookDetail")
const Reports = require("./routes/reports")
const Review = require("./routes/review")

const app = express()
app.use(express.json())
//connect to mongoose //mongodb://127.0.0.1:27017/fitness
const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://prem551969:Prem551969@fitnessapp.tomgeha.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log("connected to mongoDB")

};
connectDB()
app.use(cors())
app.use("/bookdetails",BookDetail)
app.use("/review",Review)
app.use("/reports",Reports)
const port = 3000;
app.listen(port, ()=> console.log("listening on port 3000"))