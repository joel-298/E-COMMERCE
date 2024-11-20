const express = require("express")
const admin = express();
const bcrypt = require("bcryptjs");
const adminModel = require("../models/adminModel");

admin.get("/",async(req,res)=>{
    let data = await (adminModel).find();
    res.send(data)
})

admin.post("/",async(req,res)=>{
    let{name,email,password,image,description} = req.body
    if(!name || !email || !password || !image || !description){
        return res.send("All fields required");
    }

    let data = await (adminModel).find({email:email});

    if(data.length == 0){
        const newpass = await bcrypt.hash(password.toString(),10);
    
        const result = await adminModel.create({
            name:name,
            email:email,
            password:newpass,
            image:image,
            description:description,
            category:"seller"
        })
     
        res.status(201);
        res.send(
            message="Seller Added Successfully"
        )
    }
    else{
        res.send("Seller Already Exists")
    }
})

module.exports = admin