const express = require("express");
const app = express();
const {people} = require("./data");

app.use(express.static("./public"));
app.use(express.urlencoded({extended: "false"}));
app.use(express.json())

app.get("/api/people", (req, res)=>{
    res.status(200).json({success:true, data:people});
});

app.post("/api/people", (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: "please fill the cred"})
    }
    res.status(201).json({success:true, person: name});
})

app.post("/api/postman/people", (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: "please fill the cred"})
    }
    res.status(201).json({success:true, data: [...people, name]});
})

app.put("/api/people/:id", (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const singleId = people.find((person)=> person.id === Number(id));
    if(!singleId){
        res.status(400).json({success:false, msg: "not found"})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name;
        }
        return person
    })
    res.status(200).json({success:true, data:newPeople})
})

app.delete("/api/people/:id", (req, res)=>{
    const {id} = req.params;
    const newPeople = people.filter((person)=>{
        if(person.id != Number(id)){
            return person
        }
    })
    res.status(200).json({success:true, data:newPeople})
})

app.post("/login", (req, res)=>{
    const {name} = req.body;
    if(name){
        res.send(`hello ${name} and welcome`);
    }
    else{
        res.status(404).send("please fill the cred");
    }
})



app.listen(5000);