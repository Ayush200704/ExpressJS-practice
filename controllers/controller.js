const { people } = require("../data");

const getInput = (req, res)=>{
    res.status(200).json({success:true, data:people});
};

const postInput = (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: "please fill the cred"})
    }
    res.status(201).json({success:true, person: name});
};

const postPostman = (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: "please fill the cred"})
    }
    res.status(201).json({success:true, data: [...people, name]});
};

const putInput = (req, res)=>{
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
};

const deleteInput = (req, res)=>{
    const {id} = req.params;
    const newPeople = people.map((person)=>{
        if(person.id != Number(id)){
            return person
        }
    })
    res.status(200).json({success:true, data:newPeople})
};

module.exports = {
    getInput,
    postInput,
    postPostman,
    putInput,
    deleteInput
}