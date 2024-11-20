const mongoose = require("mongoose")

const sellerSchema = mongoose.Schema({
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

const sellerModel = mongoose.model("sellers",sellerSchema);
module.exports = sellerModel