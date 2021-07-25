// Imports
const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

const { port, mongoURI } = require("./config.js")
const postsRoutes = require("./routes/posts")

const app = express()   // Express instance
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

// Connecting to MongoDb database
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})                                                            // returns a promise
    .then(() => console.log("MONOGDB DATABASE CONNECTED!"))
    .catch((err) => console.log(err))

app.use("/api/posts", postsRoutes)

app.get("/", (req, res) => {
    res.send("Homepage...")
})
app.listen(port, () => { console.log("Express server is running!") })