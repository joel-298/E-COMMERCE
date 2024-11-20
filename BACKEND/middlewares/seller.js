const express = require("express");
const productModel = require('../models/productModels');
const authenticateToken = require("./jwt_verification");
const seller = express.Router();


seller.get("/get",authenticateToken, async (req,res)=>{
    try {
        const all = await productModel.find();
        res.status(200).json({arr: all});
      } catch (error) {
        res.status(500).json({message: "An error occurred while fetching products ..... ", error });
      }
})
seller.post("/y", async (req, res) => {
    const { title } = req.body;
    try {
      const FILTER = await productModel.find({gender: title});
      res.status(200).json({ arr: FILTER });
    } catch (error) {
      res.status(500).json({ message: "Error fetching products !", error });
    }
});
seller.get("/brands", async (req,res)=>{
    // we are going to work on this later
})
seller.post("/item", async (req,res)=>{
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




seller.post('/add', async (req, res) => {
    try {

seller.post('/add', async (req, res) => {            // seller -> adding item in products
    try { 
        const {
            image,
            image2,
            image3,
            image4,
            image5,
            name,
            originalPrice,
            discountPercent,
            companyName,
            description,
            type,
            availableSize,
            gender,
            totalQuantityAvailable,
            category
        } = req.body;

        // Create a new product document
        const newProduct = await productModel.create({
            image,
            image2,
            image3,
            image4,
            image5,
            name,
            originalPrice,
            discountPercent,
            companyName,
            description,
            type,
            availableSize,
            gender,
            totalQuantityAvailable,
            category
        });

        // Send success response
        res.status(201).json("product added successfully");
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error: error.message });
    }
});



seller.patch('/edit/:id', async (req, res) => {                                                             // seller -> editting item in products
    try { 
        console.log(req.body);  // Log the incoming request body
        const { id } = req.params;
        const updateData = req.body;

        const updatedProduct = await productModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
});




seller.delete('/delete/:id',async(req,res)=>{                                                          // seller -> deleting item in products
    try { 
        const{id} = req.params;     // Get product ID from URL params
        const deletedProduct = await productModel.findByIdAndDelete(id);

        if(!deletedProduct){
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }

    
})

module.exports = seller;