const express=require("express");
const app=express();
let port=4000;

app.set("template engine","ejs")
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Mirai")
.then(() =>{
    console.log("DB Connection is alive...")})
.catch(err =>{
    console.log(err)});
// console.log(mongoose);
// let port=4000;

const MiraiSchema=new mongoose.Schema({
    name:"String",
    age:Number,
    course:"String"
})
const students1=mongoose.model("students1",MiraiSchema)

app.get("/",async(req,res)=>{
    let allstudent=await students1.find();
    console.log(allstudent);
    
    let obj={
        "name":"partha sarthi",
        "age":33,
        "course":"B pharma"
    }
    allstudent = allstudent.filter(s => s.age > 10);
    res.render("students.ejs",{allstudent});
    
})
app.get("/",(req,res)=>{
    
    res.send("home page is on service .......");
    
})
app.listen(port,()=>{
        console.log(`server is working on ${port}`);

})