const express = require("express");
const app = express();

app.use((req,res,next)=>{
    let out = `url=${req.url} and address is ${req.ip}`;
    console.log(out);
    next();
    
})


app.use((req,res,next)=>{
    console.log("middleware 1 for mobile auth");
    // authentication 
    let auth = true;
    if(!auth){
        res.send("auth failed... try again")
    }
    else{
        next();
    }
    // next();
})

app.use((req,res,next)=>{
    console.log("middleware 2 for email auth");
    // authentication 
    let auth = true;
    if(!auth){
        res.send("email auth failed... try again")
    }
    else{
        next();
    }
    // next(); -->> to call the next middleware
})

app.get("/",(req,res)=>{
    res.send("home page...")
})

app.post("/details",(req,res)=>{
    console.log("details wala route");
    console.log(req.body); // --->>> contains the data sent by the client in the body of an HTTP request

    res.send("data saved ......")
    
})



app.get("/about",(req,res)=>{
    res.send("ABOUT PAGE...")
})

app.use((req,res,next)=>{
    res.send("404 NOT FOUND")
})


app.listen(3000,()=>{
    console.log(`Server is running at 3000`);
    
})