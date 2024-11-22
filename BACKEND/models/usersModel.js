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
    cart:[{type: mongoose.Schema.Types.Mixed}] // Allows flexibility to store products objects
});

const userModel = mongoose.model("users",userSchema);
module.exports = userModel ;