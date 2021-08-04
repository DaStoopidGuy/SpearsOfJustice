function auth(req, res, next) {
    try {
        const token = req.cookies.token

        if (!token) throw new Error("No token");
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({message: "Unauthenticated"})
    }
}

module.exports = auth