const express = require("express");
const productModel = require('../models/productModels');
const products = express.Router(); 

products.get("/get", async (req,res)=>{              // displaying all the products                                 
    try {
        const all = await productModel.find();
        res.status(200).json({arr: all});
      } catch (error) {
        res.status(500).json({message: "An error occurred while fetching products ..... ", error });
      }
})
products.post("/y", async (req, res) => {            // displaying for y page
    const { title } = req.body;
    try {
      const FILTER = await productModel.find({gender: title});
      res.status(200).json({ arr: FILTER });
    } catch (error) {
      res.status(500).json({ message: "Error fetching products !", error });
    }
});

products.get("/brands", async (req,res)=>{   // fetch from localhost:4000/admin/get
    // we are going to work on this later
});
products.post("/item", async (req,res)=>{           // display for item
    const {_id} = req.body ; 
    try {
         const item = await productModel.findOne({ _id : _id});
         if (item) {
             res.status(200).json({ obj: item });
         } else {
             res.status(404).json({ message: "Item not found!" });
         }       
    } catch(error) {
        res.status(500).json({message: "Error fetching item !", error }) ;
    } 
});

module.exports = products ;
