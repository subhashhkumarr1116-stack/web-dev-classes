const express = require("express")
const app = express()

app.get("/",(req,res)=>{


    console.log(req.param);
    
    res.json({
        "name":"vikas patel",
        "college":"mirai school of technology"
    })
})

app.get("/result/:year/:roll",(req,res)=>{
    console.log(req.params);
    console.log(req.params.roll);
    
    // res.send("fail h bhai....")
    res.send(`fail ho gya ${req.params.roll}`)    
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("data found in db")
    
})
app.listen(3000,()=>{
    console.log("server is running at 3000");
    
})