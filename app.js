const express = require("express")
const app = express();

const people = require("./router/people");
const auth = require("./router/auth");


app.use(express.static("./public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000)