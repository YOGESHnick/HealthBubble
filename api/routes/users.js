const router = require("express").Router();

router.get("/", (req,res)=>{
    res.send("Vanakkam to userRoute!");
})

module.exports=router;