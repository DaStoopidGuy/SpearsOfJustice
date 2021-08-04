const router = require("express").Router()

// LOGOUT route
router.get("/", async (req, res) => {
    try {
        return res.status(200).cookie("token", "", {httpOnly: true, expires: new Date(0)}).json({message: "User logged out"})
        
    } catch (error) {
        console.log(error)
        res.statsu(500).send()
    }
})

module.exports = router