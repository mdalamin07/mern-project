// const { json } = require("express");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/connection");
const User = require("../model/userSchema");


// Ragister Part

router.post('/register',async(req, res) => {
    const{name, email, phone, work, password, cpassword} = req.body
    if(!name || !email || !phone|| !work|| !password|| !cpassword){
        return res.status(422).json({error: "Please field properly"});
    }
    try{
        const userExit = await User.findOne({email:email});
        if(userExit) {
            return res.status(422).json({error: "Enail already Exist"});
        }else if(password != cpassword) {
            return res.status(422).json({error: "Password are not matching"});
        }else {
            const user = new User({name, email, phone, work, password, cpassword});
            const userRagister = await user.save();
        
            if(userRagister) {
                res.status(201).json({message : "User Ragister Successfuly"});
            }else{
                res.status(500).json({error : "Faild to Ragister"});
            }
        }
        
    }catch(error){ console.log(error);}
});

// Signin Part

router.post("/signin", async(req, res) =>{
    try{
        const {email, password} = req.body;
        
        if(!email || !password) {
            return res.status(400).json({error: "Please Filed The Data"})
        }
        const userLogin = await User.findOne({email : email});

        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const tokens = await userLogin.generateAuthToken();
            // console.log(tokens);

            res.cookie("jwt", tokens, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true,
            })

            if(!isMatch) {
                res.status(400).json({error: "Invalid Credientials"});
            }else{
                res.json({message: "User Signin Successfully"});
            }
        }else{
            res.status(400).json({error: "Invalid Credientials"});
        }
    }catch(error) {
        console.log(error);
    }
});
// About Page
router.get('/about', authenticate ,(req, res) =>{
    res.send(req.rootUser);

});

// Get user Data for contact us and home page
router.get("/getData", authenticate, (req,res) => {
    res.send(req.rootUser);
    
})
// Contact us page
router.post("/contact", authenticate, async (req, res) => {
    try{
        const {name, email, phone, message } = req.body;

        if(!name || !email || !phone || !message) {
            console.log("Error in contact From 😑")
            // windows.alert("Please Filled the contact form")
            return res.json({error : "Please filled the contact form"});
        }

        const userContact = await User.findOne({_id: req.userID });

        if(userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();
            res.status(201).json({message:"User Contact Successfully"})
        }

    }catch (error) {
        console.log(error);
    }
})

// Logout page
router.get("/logout", (req, res) => {
    console.log("Logout Page")
    res.clearCookie("jwt", {path: '/'})
    res.status(200).send("User Logout")
})


module.exports = router;