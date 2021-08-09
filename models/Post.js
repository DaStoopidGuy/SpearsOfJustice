const { Schema, model } = require("mongoose")
const User = require("./User")

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    body:
    {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: true
    }
})

const Post = model("post", PostSchema)

module.exports = Post