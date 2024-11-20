const express = require("express");
require('./models/connections');
const app = express();
const cors = require('cors');
const signup = require("./middlewares/signup");
const admin = require("./middlewares/admin");
const seller = require("./middlewares/seller");

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/seller',seller); // PRODUCTS -> get , add , filter , delete
app.use("/signup",signup); // USERS -> signup , login , logout , jwt , verify 
app.use("/admin",admin);   // SELLERS -> get , add , delete ---> (through admin)

const PORT = 4000 ;
app.listen(PORT,(err)=>{
    if(err) console.log(err) ;
    else {
        console.log(`SERVER RUNNING ON PORT : ${PORT}`);
    }
})