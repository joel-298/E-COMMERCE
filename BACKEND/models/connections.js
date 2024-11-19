const mongoose = require("mongoose");

const url = "mongodb+srv://karankumargarg1610:karankumargarg1610@users.l24xq.mongodb.net/UrbanCart?retryWrites=true&w=majority&appName=Users";
mongoose.connect(url)
.then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log("error connecting mongodb : "+ err);
})