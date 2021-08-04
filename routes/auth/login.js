const User = require("../../models/User")
const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { jwtSECRET } = require("../../config")

// LOGIN route
router.post("/", async (req, res) => {
    try {
        const { username, password } = req.body

        // Check if both username & password are filled in
        if (!username || !password)
        return res.status(400).json({message: "All required fields are not filled"});

        // Look for user
        const foundUser = await User.findOne({username})

        // Chech if username does not exist
        if (!foundUser)
        return res.status(400).json({message: "Username or Password are incorrect"});

        const isPassCorrect = await bcrypt.compare(password, foundUser.password)

        // Check if password is incorrect
        if (!isPassCorrect)
        return res.status(400).json({message: "Username or Password are incorrect"});

        // Create token
        const token = await jwt.sign({id: foundUser._id}, jwtSECRET)

        // Create cookie
        return res.status(200).cookie("token", token, {httpOnly: true}).json({message: "User logged in"})
        
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

module.exports = router