const express = require("express");
const connection = require("../connections/sqlconnection");
const router = express.Router();
const bodyParser = require('body-parser');

router.get("/",function(req,res){
    res.sendFile(__dirname + "/src/signup.html");
})

module.exports = router;