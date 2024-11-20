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




products.post("/x", async (req, res) => {
  const { title1, title2, type, category, size } = req.body;

  try {
      // Initialize the global array
      let FILTER = await productModel.find(); 

      // Step 1: Filter by `title1`
      if (["female", "male", "kids"].includes(title1.toLowerCase())) { // Filter by gender
          FILTER = await productModel.find({ gender: title1.toLowerCase() });
      } 
      if (!["home", "female", "male", "kids"].includes(title1.toLowerCase())) { // Filter by companyName
          FILTER = await productModel.find({ companyName: title1.toLowerCase() });
      }

      // Step 2: Additional filtering logic for `title2`
      let FILTER2 = [];
      if (type.length === 0 && category.length === 0 && size.length === 0) {
          if (["casual", "formal", "party", "sports"].includes(title2.toLowerCase())) { // Filter by type
              FILTER2 = FILTER.filter((ele) => ele.type.toLowerCase() === title2.toLowerCase());
          } else if (["topwear", "bottomwear", "footwear", "accessories"].includes(title2.toLowerCase())) { // Filter by category
              FILTER2 = FILTER.filter((ele) => ele.category.toLowerCase() === title2.toLowerCase());
          } else if (title2.toLowerCase() === "onsale") { // Filter by discountPercent
              FILTER2 = FILTER.filter((ele) => ele.discountPercent > 50);
          } else {
              FILTER2 = FILTER; // Logic for new arrivals or other cases
          }
      } 
      else {
          // Step 3: Priority Filtering
          let SUBFILTER1 = FILTER;
          if (type.length !== 0) {
              SUBFILTER1 = FILTER.filter((ele) => type.includes(ele.type));
          }
          let SUBFILTER2 = SUBFILTER1;
          if (category.length !== 0) {
              SUBFILTER2 = SUBFILTER1.filter((ele) => category.includes(ele.category));
          }
          let SUBFILTER3 = SUBFILTER2;
          if (size.length !== 0) {
              // Filter by availableSizes
              SUBFILTER3 = SUBFILTER2.filter((ele) => {
                            // Filter by availableSizes: check if any of the sizes in the product's availableSizes array match any size in the size filter array
                  return ele.availableSize.some((availableSize) => size.includes(availableSize));
              });
          }
          FILTER2 = SUBFILTER3;
      }

      // Send the response
      console.log(FILTER2);
      res.status(200).json({ arr: FILTER2 });
  } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
  }
});

module.exports = products ;
