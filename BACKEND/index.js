const express = require("express") ;
const cors = require("cors") ;

const app = express() ; 

app.get("/", (req,res)=> {
    res.send("HELLO WORLD") ;
});


const PORT = 5000 ;
app.listen(PORT,(err)=>{
    if(err) console.log(err) ;
    else {
        console.log(`SERVER RUNNING ON PORT : ${PORT}`);
    }
})