const router = require("express").Router();

router.get("/", (req,res)=>{
    res.send("Vanakkam to auth Route!");
})

module.exports=router;