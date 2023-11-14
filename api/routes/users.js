const router = require("express").Router();
const User = require("../models/User");

// Update User
router.put("/:id", async(req,res)=>{
    if(req.body.userId === req.params.id || req.user.isAdmin ){

    }else{
        return res.status(403).json("You are not allowed to perform this action!");
    }
})
// Delete User
// get a User
// follow a User
// unfollow a User

router.get("/", (req,res)=>{
    res.send("Vanakkam to userRoute!");
})

module.exports=router;