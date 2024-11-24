const express = require("express");
const productModel = require("../models/productModels");
const userModel = require("../models/usersModel");
const user = express.Router();


// Route to check if the item with selected size exists in the user's cart
user.post("/check", async (req, res) => {
    const { SelectedSize, _id, user_id } = req.body;

    if (!SelectedSize || !_id || !user_id) {
        return res.json({ message: "Invalid data provided" });
    }

    try {
        const obj = await userModel.findById(user_id);
        if (!obj) {
            return res.json({ message: "User not found" });
        }

        const itemPresent = obj.cart.some(item => item._id === _id && item.sizeSelected === SelectedSize); // will return a boolean value
        return res.json({ value: itemPresent });
    } catch (error) {
        console.error("Error while checking cart:", error);
        return res.json({ message: "Internal server error" });
    }
});

// Route to add an item with sizeSelected to the user's cart
user.post("/add_to_cart", async (req, res) => {
    const { SelectedSize, _id, user_id } = req.body;

    console.log(SelectedSize , _id , user_id) ;
    if (!SelectedSize || !_id || !user_id) {
        return res.json({ error: "Invalid data provided" });
    }

    try {
        // Fetch user
        const obj = await userModel.findById(user_id);
        if (!obj) {
            return res.status(404).json({ error: "User not found" });
        }

        // Fetch product 
        const product = await productModel.findById(_id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Add item to cart
        obj.cart.push({ ...product.toObject(), sizeSelected: SelectedSize });
        await obj.save();

        return res.json({ message: "Item added to cart successfully" });
    } catch (error) {
        console.error("Error while adding to cart:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

user.post("/cart", async (req, res) => {
    const { user_id } = req.body;  
    if (!user_id) {
      return res.json({ message: "User ID not received" });  // Handle the case where user_id is not provided
    }
  
    try {
      const user = await userModel.findById(user_id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Step 1: Initialize an empty array to store the result
      const result = [];

      // Step 2: Loop over each item in the user's cart
      for (let cartItem of user.cart) {
        // Fetch the product based on the product ID from the cart
        const product = await productModel.findById(cartItem._id);

        // If the product is not found, continue to the next item
        if (!product) {
          continue;
        }

        // Step 3: Push the product and selected size to the result array
        result.push({
          product: product, // The product fetched from productModel
          SelectedSize: cartItem.sizeSelected // The selected size from the cart
        });
      }

      // Step 4: Return the result array to the frontend
      return res.json({ cart: result });

    } catch (error) {
      console.error("Error fetching cart:", error);
      return res.status(500).json({ message: "Internal server error" });  // Handle any errors that occur
    }
});



module.exports = user;