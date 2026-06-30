const express = require("express")
const app = express();
const port = 3000;
connectDB();

const log = require("./middleware/log.js")
const gold = require("./middleware/gold.js")
const connectDB = require("./config/db.js")
const route = require("./routes/")

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(log);
app.use("/gold",gold);













app.listen(port,()=>{
    console.log("server is running at 3000 pory");
    
})