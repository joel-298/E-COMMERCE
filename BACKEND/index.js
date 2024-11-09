const express = require("express") ;
const cors = require("cors") ;

const app = express() ; 

app.get("/", (req,res)=> {
    res.send("HELLO WORLD") ;
});

// FUNCTION TO FETCH THE FULL DATA OF KASHISH'S API :         const products = [data fetch only one time]
    // SUB FUNCTIONS : 
    // const men = [] ; 
    // const women = [] ;
    // const kids = [] 
    // and many more according to the requests ...
    // men , jeans , trowsers, etc etc .. []


    // app.get("/men" , (req,res) => {
    //     res.json({array : men}) ;
    // });

const PORT = 5000 ;
app.listen(PORT,(err)=>{
    if(err) console.log(err) ;
    else {
        console.log(`SERVER RUNNING ON PORT : ${PORT}`);
    }
})