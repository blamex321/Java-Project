require('dotenv').config()

const express = require('express');

const app = express();

const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");
const contactRoute = require("./routes/contact")

app.use(express.static('public'));
app.use("/login",loginRoute);
app.use("/signup",signupRoute);
app.use("/contact",contactRoute);


app.get("/",function(req,res){
    res.sendFile(__dirname + "/src/index.html");
})

app.get("/pricing",function(req,res){
    res.sendFile(__dirname + "/src/pricing.html");
})




app.listen(3000| process.env.PORT,function(err){
    if(err){
        console.log(err);
    } else {
        console.log("server started at port 3000");
    }
})