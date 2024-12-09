const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
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
    }
});

const adminModel = mongoose.model("admins",adminSchema);75
module.exports = adminModel;