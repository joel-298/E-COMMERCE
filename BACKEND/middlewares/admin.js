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

admin.delete("/delete" , async (req,res) => { // deleting a seller route : THOURGH QUERY
    const {email,companyName} = req.query;
    try {
        await(sellerModel).deleteOne({email});
    } catch (error) {
        console.log("error while deleting seller account", error) ;
    }
    try {
        await(productModel).deleteOne({companyName});
    } catch (error) {
        console.log("error while deleting all products from seller account", error) ;
    }
    res.status(200).json({message:"Seller account deleted successfully"}) ;
});

module.exports = admin ; 










// When to Use Each Method
//1) req.query: When you need to send optional or non-sensitive information in a GET or DELETE request.
// Example: Filters, sort options, page numbers.

//2) req.body: When dealing with sensitive or complex data that should not be part of the URL.
// Example: Login credentials, form submissions, JSON payloads.

//3) req.params: When the data is inherently part of the route, such as an ID or a resource name.
// Example: /users/:userId.

//4) req.headers: When sending metadata or authentication tokens.
// Example: Authorization tokens for secured routes.

//5) req.cookies: When dealing with persistent user-specific data.
// Example: Session IDs, user preferences.
