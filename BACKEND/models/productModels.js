const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    image:{type:String,required:true},
    image2:{type:String,required:true},
    image3:{type:String,required:true},
    image4:{type:String,required:true},
    image5:{type:String,required:true},
    name:{type:String,required:true},
    originalPrice:{type:Number,required:true},
    discountPercent:{type:Number,required:true},
    companyName:{type:String,required:true},
    description:{type:String,required:true},
    type:{type:String,required:true},
    availableSize:{type:Array,required:true},
    gender:{type:String,required:true},
    totalQuantityAvailable:{type:Number,required:true},
    category:{type:String,required:true}
})

const productModel = mongoose.model('products',productSchema);
module.exports = productModel;