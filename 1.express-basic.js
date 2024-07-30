const express = require("express");
const app = express();  

app.get("/", (req, res)=>{
    res.status(200).send("home page")
})

app.get("/About", (req, res)=>{
    res.status(200).send("this is about page");
})

app.all("*", (req, res)=>{
    res.status(404).send("<h1>response not found</h1>")
})

app.listen(5000);