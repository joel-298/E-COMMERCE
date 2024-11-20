const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    cart:[]
})

const userModel = mongoose.model("users",userSchema);
module.exports = userModel ;