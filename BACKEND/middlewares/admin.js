const express = require("express")
const admin = express();
const bcrypt = require("bcryptjs");
const sellerModel = require("../models/sellerModel");
const userModel = require("../models/usersModel");
const productModel = require("../models/productModels");


admin.get("/getSellers", async (req,res)=>{                        // displaying all the sellers 
    try {
        const data = await (sellerModel).find();
        res.status(200).json({arr : data}) ; 
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error: error.message });
    }
});
admin.get("/getUsers" , async (req,res) => {
    try{
        const data = await (userModel).find();
        res.status(200).json({brr: data}) ;
    } catch(error) {
        res.status(500).json({ message: "Error ufetching data", error: error.message });       
    }
});

admin.post("/add", async (req,res)=>{                              // adding a seller route
    let{name,email,password,image,description} = req.body.obj
    if(!name || !email || !password || !image || !description){
        return res.status(400).json({message:"All fields required"});
    }

    let data = await (sellerModel).find({email:email});

    if(data.length == 0){
        const newpass = await bcrypt.hash(password.toString(),10);
    
        const result = await sellerModel.create({
            name:name,
            email:email,
            password:newpass,
            image:image,
            description:description,
            category:"seller"
        })
     
        res.status(201).json({
            message:"Seller Added Successfully"
        });
    }
    else{
        res.status(409).json({message:"Seller Already Exists"});
    }
});

admin.delete("/delete" , async (req,res) => { // deleting a seller route
    let {email,companyName} = req.body;
    let data = await(sellerModel).deleteOne({email:email});
    let data2 = await(productModel).deleteOne({companyName:companyName});
    console.log(data2);
    res.send(data);
});

module.exports = admin