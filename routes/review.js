const express = require("express")
const router = express.Router()
const Review = require('../models/Review')



// POST/review

router.post("/", async (req, res) => {
    const { bookId, name, message, star } = req.body

    try {
        let review = new Review({
            bookId,
            name,
            message,
            star
        })
        await review.save();
        res.status(201).json({ msg: "Review posted sucessfully" })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
})


// GET /bookDetails
router.get('/:id', async (req, res) => {
    try {
        let defined = req.params.id
        let data = await Review.find({ bookId: defined })
        const fetching = JSON.stringify(data)
        if (fetching === "[]") {
            res.json("No REVIEWS")
        } else {
            res.json(data);


        }
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
    }
})


module.exports = router