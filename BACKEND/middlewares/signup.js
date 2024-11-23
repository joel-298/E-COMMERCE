const express = require("express");
const signup = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/usersModel");
const sellerModel = require("../models/sellerModel");
const adminModel = require("../models/adminModel");


signup.post("/",async(req,res)=>{                                    // adding a new user to USER
    let {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.send("All fields required");
    }

    let data = await (userModel).find({email:email})
    
    if(data.length == 0){

        const newpass = await bcrypt.hash(password.toString(),10);
    
        const result = await userModel.create({
            name:name,
            email:email,
            password:newpass,
            category:"user"
        })
     
        res.status(201);
        res.send("Account Created Successfully")
    }
    else{
        res.send("User Already Exists");
    }
})

signup.post("/login", async(req,res)=>{                          // LOGIN check -> includes admin , seller , user
    let {email,password} = req.body
    if(!email || !password){
        return res.send({
            message:"All fields required",
            boolean:false
        });
    }

    // jwt.sign({user},"secret",{expiresIn:'3000s'},(err,token)=>{
    //     res.send(token)
    // })

    // CHECK FROM ADMIN 
    const data_admin = await(adminModel).findOne({email:email}) ;            // check from admin
    if(data_admin) { 
        if(data_admin.password === password) {
            const payload = { id: data_admin._id, email: data_admin.email, category: data_admin.category };
            const token = jwt.sign(payload, "secret", { expiresIn: "3000s" });
            return res.status(200).json({
                                            message:"ADMIN Logged in successfully",
                                            token:token,
                                            category:"admin",
                                            boolean:true
                                        });
        }
        else{
            return res.json({
                                            message:"WRONG PASSWORD ADMIN",
                                            boolean:false
                                        });
        }
    }

    const data_seller = await (sellerModel).findOne({email:email});           // check from sellers
    if(data_seller) {
        const match = await bcrypt.compare(password,data_seller.password);
        if(match == true){
            const payload = { id: data_seller._id, name : data_seller.name , email: data_seller.email, category: data_seller.category, description: data_seller.description , image: data_seller.image };
            const token = jwt.sign(payload, "secret", { expiresIn: "3000s" });
    
            return res.status(200).json({
                                        message:"SELLER Logged in successfully",
                                        token:token,
                                        category:"seller",
                                        boolean:true
                                    });
        }
        else{
            return res.json({
                                            message:"WRONG PASSWORD SELLER",
                                            boolean:false
                                        });
        }
    }

    const data_user = await (userModel).findOne({email:email});           // check from Users
    if(data_user) {
        const match = await bcrypt.compare(password,data_user.password);
        if(match == true){
            const payload = { id: data_user._id, name: data_user.name, email: data_user.email, category: data_user.category };
            const token = jwt.sign(payload, "secret", { expiresIn: "3000s" });
    
            return res.status(200).json({
                                            message:"USER Logged in successfully",
                                            token:token,
                                            category:"user",
                                            boolean:true
                                        });
        }
        else{
            return res.json({
                                            message:"WRONG PASSWORD USER",
                                            boolean:false
                                        });
        }
    }

    // USER NOT FOUND
    return res.json({
        message: "User not found. Please sign up.",
    });


});

signup.post("/forgot",async(req,res)=>{                        // FORGOT PASSWORD CHECK
    let {email,password,confirm} = req.body

    if(!email || !password || !confirm){
        return res.send("All fields required");
    }

    if(password!=confirm){
        return res.send("Password ans Confirm password are not same");
    }
    let data = await (userModel).findOne({email:email})

    if(!data){
        return res.send("User Not Found")
    }

    let newpass = await bcrypt.hash(password.toString(),10)
    data.password = newpass;
    await data.save();



    res.send("Password Changed Successfully")

});




signup.post("/jwtverification", (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ 
            message: "Token is required", 
            valid: false 
        });
    }

    jwt.verify(token, "secret", (err, decoded) => {
        if (err) {
            return res.status(401).json({ 
                message: "Invalid or expired token", 
                valid: false 
            });
        }

        // Extract payload and validate category (user, admin, seller)
        const { category } = decoded;

        if(category == "admin") {             // admin
            const { email } = decoded;
            return res.status(200).json({ 
                message: "Token is valid", 
                valid: true, 
                category, 
                email 
            });
        }
        else if (category == "seller") {     // seller
            const { name , email , description , image  } = decoded;
            return res.status(200).json({ 
                message: "Token is valid", 
                valid: true, 
                name , 
                email ,
                description , 
                category, 
                image
            });
        }
        else{                                 // user
            const { name , email } = decoded;
            return res.status(200).json({ 
                message: "Token is valid", 
                valid: true,
                name, 
                email ,
                category
            });
        }
    });
});

module.exports = signup







// (req,res) => {
//     const {name} = req.body ; // company name 

//     const array = findPoryd (companyName: name) 
//     res.jason({arr: array}) ;
// }