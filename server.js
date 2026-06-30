const express = require("express")
const app = express();
const fs = require("fs");
const port = 3000;

app.use("/public",express.static("public"));
app.use("/assets",express.static("assets"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req,res,next)=>{
    // i++;
    // const timestamp = new Date();
    // // console.log(timestamp);
    // const data = `client data = ${i},${req.url}, ${req.ip}, ${timestamp} \n `
    // fs.appendFileSync("log.txt",data,"utf-8")
    next();
})

app.get("/",(req,res)=>{
    res.send("home page......")
})

app.post("/register", (req, res) => {
    console.log(req.body);
    fs.appendFileSync("data.json",JSON.stringify(req.body)+ "\n","utf-8")
    res.send("User regestration completed.... ")
});


app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`);
    
});
