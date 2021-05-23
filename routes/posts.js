const { Router } = require("express")
const Post = require("../models/Post")

const router = Router()

// Get Posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find()
        if (!posts) {
            throw new Error("No posts available")
        }
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Create new posts
router.post("/", async (req, res) => {
    const { title, body } = req.body
    const newPost = new Post({ title, body })
    try {
        const post = await newPost.save()
        if (!post) {
            throw new Error("There was an error saving the post")
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router