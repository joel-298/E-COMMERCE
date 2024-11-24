const express = require("express");
require('./models/connections');
const app = express();
const cors = require('cors');
const signup = require("./middlewares/signup");
const admin = require("./middlewares/admin");
const seller = require("./middlewares/seller");
const products = require("./middlewares/products");
const user = require("./middlewares/users");

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/seller',seller);       // SELLER -> add , edit , delete (products)                 /seller   -> /add , /edit , /delete
app.use('/products',products) ;  // PRODUCTS -> get , filter , item , BRANDS display         /products -> /get , /items , /y , /x
app.use("/signup",signup);     // USERS -> signup , login , logout , jwt , verify 
app.use("/admin",admin);         // ADMIN -> get , add , delete ---> (seller)                /admin    -> /getSellers , /add , /delete
app.use("/user", user) ;

const PORT = 4000 ;
app.listen(PORT,(err)=>{
    if(err) console.log(err) ;
    else {
        console.log(`SERVER RUNNING ON PORT : ${PORT}`);
    }
})