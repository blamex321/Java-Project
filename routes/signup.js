const express = require("express");
const connection = require("../connections/sqlconnection");
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path')
router.get("/",function(req,res){
    // res.sendFile(__dirname+ + "/src/signup.html");
    const reqPath = (path.join(__dirname,"../"));
    res.sendFile(reqPath + "/src/signup.html");
})

module.exports = router;