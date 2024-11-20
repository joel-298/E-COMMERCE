const authenticateToken = (req,res,next)=>{
    const token = req.headers['authorization']
    console.log(token);

    if(!token){
        return res.status(403).send("Access Denied");
    }

    jwt.verify(token, "secret", (err, user) => {
        if (err) return res.status(403).send("Invalid Token");
        req.user = user;
        next();
    });
}

module.exports = authenticateToken