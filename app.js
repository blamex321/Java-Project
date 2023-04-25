const express = require('express');

const app = express();
app.use(express.static('public'));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/src/index.html");
})

app.get("/pricing",function(req,res){
    res.sendFile(__dirname + "/src/pricing.html");
})

app.get("/contacts",function(req,res){
    res.sendFile(__dirname + "/src/contacts.html")
})

app.get("/signup",function(req,res){
    res.sendFile(__dirname + "/src/signup.html");
})
app.get("/login",function(req,res){
    res.sendFile(__dirname + "/src/login.html")
})
app.listen(3000| process.env.PORT,function(err){
    if(err){
        console.log(err);
    } else {
        console.log("server started at port 3000");
    }
})