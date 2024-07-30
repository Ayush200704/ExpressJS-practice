const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
    res.send("<h1>welcome</h1><br><a href='/api/products'>Products</a>");
})


//to print all the data in json
app.get("/api/products", (req, res) => {
    res.json(products)
})


//to print the 3 keys of the json data
// app.get("/api/products", (req, res) => {
//     const newProducts = products.map((product)=>{
//         const {id, name, image } = product
//         return {id, name, image}
//     })
//     res.json(newProducts)
// })


//printing the single value
// app.get("/api/products/:id", (req, res)=>{
//     const {id} = req.params;
//     const singleProduct = products.find((product) => { 
//         return product.id === Number(id);
//     });
//     if(!singleProduct){
//         res.status(404).send(`the id ${id} does not found`);
//     }
//     res.json(singleProduct);
// });


//query
app.get("/api/products/query", (req,res)=>{
    const {search, limit} = req.query;
    
    let sortedArray = [...products];

    if(search){
        sortedArray = sortedArray.filter((product)=>{
            return product.name.startsWith(search)
            //return product.name.includes(search)
        })
    }
    if(limit){
        sortedArray = sortedArray.slice(0, Number(limit))
    }
    if(sortedArray.length < 1){
        //res.send("no product data matches")
        return res.json({success:true, data: []})
    }
    res.json(sortedArray)
})

app.all("*", (req, res)=>{
    res.status(404).send("<h1>page not found</h1>");
})

app.listen(5000)