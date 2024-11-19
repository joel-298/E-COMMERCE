const express = require("express");
require('./models/connections');
const products = require('./models/userModels');
const seller = require("./middlewares/seller");
const app = express();
const cors = require('cors');
app.use(cors());


app.use(express.urlencoded({extended:false}));
app.use(express.json());

// PRODUCTS
app.use('/seller',seller);


const PORT = 5000 ;
app.listen(PORT,(err)=>{
    if(err) console.log(err) ;
    else {
        console.log(`SERVER RUNNING ON PORT : ${PORT}`);
    }
})