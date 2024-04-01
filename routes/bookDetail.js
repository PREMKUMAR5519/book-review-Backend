const express = require("express")
const router = express.Router()
const BookDetail = require('../models/BookDetail')


// POST/bookdetails

router.post("/",async(req,res)=>{
    const {name,author,genre,img}=req.body

    try{
        let bookDetail = new BookDetail({
            name,
            author,
            genre,
            img
        })
        await bookDetail.save();
        res.status(201).json({msg:"book added sucessfully"})
    }catch(error){
        console.error(error.message)
        res.status(500).send("server error")
    }
})


// GET /bookDetails
router.get('/', async (req, res)=>{
    try {
        let bookDetail = await BookDetail.find({})
        res.json(bookDetail)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
})
// GET /bookDetails   (particularbook)
router.get('/:id', async (req, res)=>{
    try {
        const objectId = req.params.id;
        const data = await BookDetail.findById(objectId); 
        res.json(data);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
})
// GET /bookDetails/genre/:id
router.get('/genre/:namee', async (req, res)=>{
    try {
        const Namee= req.params.namee;
        const data = await BookDetail.find({genre:Namee});
        res.json(data);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
})
module.exports = router