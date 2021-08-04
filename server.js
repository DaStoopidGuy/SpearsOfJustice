// Imports
require("dotenv").config() //To use .env files
const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const { port, mongoURI } = require("./config.js")
const postsRoutes = require("./routes/posts")


const app = express()   // Express instance
// Adding middleware
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))
app.use(cookieParser)

// Connecting to MongoDb database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})                                                            // returns a promise
    .then(() => console.log("MONOGDB DATABASE CONNECTED!"))
    .catch((err) => console.log(`MONGODB ERROR: ${err}`))

// Routes
app.use("/api/posts", postsRoutes)  //post route
app.use("/api/register", require("./routes/auth/register"))    //register route
app.use("/api/login", require("./routes/auth/login"))    //login route
app.use("/api/logout", require("./routes/auth/logout"))    //logout route

app.get("/", (req, res) => {
    res.send("Homepage...")
})
app.listen(port, () => { console.log(`Express server is running at ${port}!`) })