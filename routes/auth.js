const User = require("../models/User")
const { Router } = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { jwtSECRET } = require("../config")

const router = Router()

router.get("/", async (req, res)=>{
    console.log("ass")
})


// REGISTER route
router.post("/register", async (req, res) =>{
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

        res.status(200).cookie("token", token, {httpOnly: true}).json({message: "User created"})
                
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }

})


// LOGIN route
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body

        // Check if both username & password are filled in
        if (!username || !password)
        res.status(400).json({message: "All required fields are not filled"});

        // Look for user
        const foundUser = User.findOne({username})

        // Chech if username does not exist
        if (!foundUser)
        res.status(400).json({message: "Username or Password are incorrect"});


        const isPassCorrect = bcrypt.compare(password, foundUser.password)

        // Check if password is incorrect
        if (!isPassCorrect)
        return res.status(400).json({message: "Username or Password are incorrect"});

        // Create token
        const token = jwt.sign({id: foundUser._id}, jwtSECRET)

        // Create cookie
        res.status(200).cookie("token", token, {httpOnly: true}).json({message: "User logged in"})
        
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})


// LOGOUT route
router.get("/logout", async (req, res) => {
    try {
        res.status(200).cookie("token", "", {httpOnly: true, expires: new Date(0)}).json({message: "User logged out"})
        
    } catch (error) {
        console.log(error)
        res.statsu(500).send()
    }
})

module.exports = router