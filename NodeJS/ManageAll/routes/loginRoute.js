const express= require("express");
const router= express.Router();
var logger = require('logger').createLogger();

const User=require('../models/UserModel');

//login route
router.put('/login', (req, res, next)=>{
    logger.info("Calling /login Service for email: "+req.body.email);
    User.find({email: req.body.email, password: req.body.password}, function(err, user){
        if(err){
            // res.json({msg: 'Failed to get data for :'+req.body.email});
            res.status(500).json({msg: 'Failed to get data for :'+req.body.email});
        }
        else if(user.length>=1){
            // res.json({"result":"success","data":user});
            // logger.info("User Data : "+user);
            res.status(200).json({"result":"success","data":[user]});
        }else{
            // res.json({"result":"loginFailure"}, {"data":null});
            res.status(200).json({"result":"loginFailure", "data":null});
        }  
    });
});
module.exports= router; 