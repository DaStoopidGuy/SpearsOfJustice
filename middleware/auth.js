const jwt = require("jsonwebtoken")
const { jwtSECRET } = require("../config")

function auth(req, res, next) {
    try {
        const token = req.cookies.token

        if (!token) return res.status(401).json({message: "Unauthorized"}); //if no token is found

        const verified = jwt.verify(req.cookies.token, process.env.JWT_SECRET) //throws an error if not verified
        // returns the payload if verified

        req.user_id = verified.user_id
        
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({message: "Unauthorized"})
    }
}

module.exports = auth