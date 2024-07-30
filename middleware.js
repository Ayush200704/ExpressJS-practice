const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// app.use("/api", logger)
app.use([logger, authorize]);

app.get("/", (req, res) => {
    res.send("home page");
})

app.get("/about", (req, res) => {
    console.log(req.user)
    res.send("about page");
})

//for specific use of middleware you can use 
// app.get("/api/products", [logger, authorize], (req, res)=>{});


app.listen(5000);