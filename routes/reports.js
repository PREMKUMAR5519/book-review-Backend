const express = require("express")
const router = express.Router()
const Reports=require("../models/Reports")

// POST/reports

router.post("/",async(req,res)=>{
    const {email,report}=req.body

    try{
        let reports = new Reports({
            email,
            report,
        })
        await reports.save();
        res.status(201).json({msg:"report submitted sucessfully"})
    }catch(error){
        console.error(error.message)
        res.status(500).send("server error")
    }
})
module.exports = router