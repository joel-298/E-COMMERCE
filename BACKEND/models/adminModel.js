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
    image:{
        type:String,
        require:true
    },
    description:{
        type:String,
    },
    category:{
        type:String,
        require:true
    }
})

const adminModel = mongoose.model("sellers",adminSchema);
module.exports = adminModel