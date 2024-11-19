const express = require("express");
const signup = express();

signup.get("/",(req,res)=>{
    res.send("Hello");
})

module.exports = signup