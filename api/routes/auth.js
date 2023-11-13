const router = require("express").Router();
const User = require("../models/User");

// R E G I S T E R 
router.post("/register", async(req,res)=>{
    // const user = await new User({
    //     username:"nicky",
    //     email:"nicky@gmail.com",
    //     password : "12345678"
    // })
    // await user.save();
    // res.send("ok");
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    });

    try{
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(error){
        console.log(error);
    }
});

module.exports=router;