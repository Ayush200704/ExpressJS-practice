const express = require("express");
const router = express.Router();

router.post("/", (req, res)=>{
    const {name} = req.body;
    if(name){
        res.send(`hello ${name} and welcome`);
    }
    else{
        res.status(404).send("please fill the cred");
    }
})

module.exports = router;