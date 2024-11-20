const express = require("express");
require('./models/connections');
const products = require('./models/productModels');
const seller = require("./middlewares/seller");
const app = express();
const cors = require('cors');
const signup = require("./middlewares/signup");
// const login = require("./middlewares/login");
app.use(cors());


app.use(express.urlencoded({extended:false}));
app.use(express.json());

// PRODUCTS
app.use('/seller',seller);
app.use("/signup",signup);
// app.use("/login",login)

const PORT = 4000 ;
app.listen(PORT,(err)=>{
    if(err) console.log(err) ;
    else {
        console.log(`SERVER RUNNING ON PORT : ${PORT}`);
    }
})