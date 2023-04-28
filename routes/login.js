const express = require("express");
const connection = require("../connections/sqlconnection");
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));


router.get("/",function(req,res){
    res.sendFile(__dirname + "/src/login.html")
})

module.exports = router;