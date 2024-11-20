const express = require("express")
const admin = express();
const bcrypt = require("bcryptjs");
const sellerModel = require("../models/sellerModel");


admin.get("/getSellers", async (req,res)=>{                        // displaying all the sellers 
    try {
        const data = await (sellerModel).find();
        res.status(200).json({arr : data}) ; 
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
});

admin.post("/add", async (req,res)=>{                              // adding a seller route
    let{name,email,password,image,description} = req.body
    if(!name || !email || !password || !image || !description){
        return res.send("All fields required");
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
     
        res.status(201);
        res.send(
            message="Seller Added Successfully"
        )
    }
    else{
        res.send("Seller Already Exists")
    }
});

admin.delete("/delete" , async (req,res) => { // deleting a seller route

});

module.exports = admin