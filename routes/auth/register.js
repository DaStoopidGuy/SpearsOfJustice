const User = require("../../models/User")
const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { jwtSECRET } = require("../../config")

// REGISTER route
router.post("/", async (req, res) =>{
    try {
        const { username, password, passwordVerify } = req.body;

        // Checking if all required fields are filled
        if (!username || !password || !passwordVerify) 
        return res.status(400).json({message: "All required fields are not filled"});

        // Checking password length
        if (password.length < 6)
        return res.status(400).json({message: "Password should be atleast 6 characters"});

        // Checking if password is equal to the verify password
        if (password !== passwordVerify)
        return res.status(400).json({message: "Passwords do not match"});

        // Check if user already exits
        const existingUser = await User.findOne({username})
        if (existingUser)
        return res.status(400).json({message: "Username not available"});

        // Hashing the password
        const passwordHash = await bcrypt.hash(password, 10)

        // Save user to db
        const newUser = new User({
            username, password: passwordHash
        });
        
        const savedUser = await newUser.save();
        // res.status(200).json({user: savedUser})

        const token = jwt.sign({id: savedUser._id}, jwtSECRET)

        return res.status(200).cookie("token", token, {httpOnly: true}).json({message: "User created"})
                
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }

})

module.exports = router