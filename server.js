// Imports
const { port, mongoURI } = require("./config.js")
const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

// Connecting to MongoDb database
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MONOGDB DATABASE CONNECTED!"))
    .catch((err) => console.log(err))

app.get("/", (req, res) => {
    res.send("Homepage...")
})
app.listen(port, () => { console.log("Express server is running!") })