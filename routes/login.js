const express = require("express");
const connection = require("../connections/sqlconnection");
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path')

router.use(bodyParser.urlencoded({extended:true}));


router.get("/",function(req,res){
    let reqPath= path.join(__dirname , "../");
    res.sendFile(reqPath + "/src/login.html")
})
router.post("/",function(req,res){
    res.redirect("/user")
})
module.exports = router;