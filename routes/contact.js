const express = require("express");
const connection = require("../connections/sqlconnection");
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path')
router.get("/",function(req,res){
    let reqPath = path.join(__dirname,"../");
    res.sendFile(reqPath + "/src/contacts.html");
})

module.exports = router;