const express = require("express")
const router = express.Router()
const BookDetail = require('../models/BookDetail')


// POST/bookdetails

router.post("/",async(req,res)=>{
    const {name,author,genre,img,desc}=req.body

    try{
        let bookDetail = new BookDetail({
            name,
            author,
            genre,
            img,
            desc
        })
        await bookDetail.save();
        res.status(201).json({msg:"Recipe added sucessfully"})
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
//update book
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, author, genre, img, desc } = req.body;

    try {
        // Find the book by ID and update with new data
        let bookDetail = await BookDetail.findByIdAndUpdate(
            id,
            { name, author, genre, img, desc },
            { new: true, runValidators: true } 
        ); //hi

        if (!bookDetail) {
            return res.status(404).json({ msg: "Book not found" });
        }

        res.status(200).json({ msg: "Book updated successfully", bookDetail });
    } catch (error) {
        console.error(error.message);//hello
        res.status(500).send("Server error");
    }
});
//delete book 
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        // Find the book by ID and delete it
        let bookDetail = await BookDetail.findByIdAndDelete(id);

        if (!bookDetail) {
            return res.status(404).json({ msg: "Book not found" });
        }

        res.status(200).json({ msg: "Book deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});
module.exports = router