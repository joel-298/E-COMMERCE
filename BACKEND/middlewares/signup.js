const express = require("express");
const userModel = require("../models/usersModel");
const signup = express();
const bcrypt = require("bcryptjs");
const adminModel = require("../models/adminModel");

signup.get("/",async(req,res)=>{
    const data = await(userModel).find({category:"seller"});
    res.send(data);
})

signup.post("/",async(req,res)=>{
    let {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.send("All fields required");
    }

    let data = await (userModel).find({email:email})
    
    if(data.length == 0){

        const newpass = await bcrypt.hash(password.toString(),10);
    
        const result = await userModel.create({
            name:name,
            email:email,
            password:newpass,
            category:"user"
        })
     
        res.status(201);
        res.send(
            message="Account Created Successfully"
        )
    }
    else{
        res.send("User Already Exists");
    }
})

signup.post("/login",async(req,res)=>{
    let {email,password} = req.body
    if(!email || !password){
        return res.send("All fields required");
    }
    
    let data = await (userModel).findOne({email:email});

    if(!data){
        data = await (adminModel).findOne({email:email});
    }


    if(!data){
        res.status(404)
        return res.send("User Not Found")
    }

    const match = await bcrypt.compare(password,data.password);
    if(match == true){
        console.log(data);
        res.send("Logged in successfully")
    }
    else{
        res.send("Wrong Password");
    }

})


signup.post("/forgot",async(req,res)=>{
    let {email,password,confirm} = req.body

    if(!email || !password || !confirm){
        return res.send("All fields required")
    }

    if(password!=confirm){
        return res.send("Password ans Confirm password are not same");
    }
    let data = await (userModel).findOne({email:email})

    if(!data){
        return res.send("User Not Found")
    }

    let newpass = await bcrypt.hash(password.toString(),10)
    data.password = newpass;
    await data.save();



    res.send("Password Changed Successfully")

})


module.exports = signup