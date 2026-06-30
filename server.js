const express = require("express");
const app = express();

const data = require("./data.json")
console.log(data);
console.log(typeof(data));


app.use((req,res,next)=>{
    console.log(`${req.url} running middle 1`);
    next();
})

app.get("/",(req,res) =>{
    // res.send({
    //     "name" : "devashish",
    //     "age" : "19",
    // })
    res.send(data)
})

app.listen(3000,()=>{
    console.log("server is running at 3000");
    
})