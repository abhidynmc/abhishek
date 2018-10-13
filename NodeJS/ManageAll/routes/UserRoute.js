
var jsonQuery = require('json-query');
const express= require("express");
const router= express.Router();
var logger = require('logger').createLogger();

// const Contact= require('../models/contacts');
const User=require('../models/UserModel');


//- - User Services  - -
//retrieving data
router.get('/users', (req, res, next)=>{
    console.log("Calling Users");
    User.find(function(err, users){
        res.json(users);
    })
    
});

//add user
router.post('/user', (req, res, next)=>{
    //logic to add contact
    logger.info("Calling user for req: "+JSON.stringify(req.body));
    let newUser= new User({
        firstname:req.body.firstname, 
        lastname:req.body.lastname,
        email:req.body.email,
        contactNo:req.body.contactNo,
        password:req.body.password,
        role:req.body.role,
        organization:req.body.organization
    });
    console.log(newUser);
    newUser.save((err, user)=>{
        if(err){
            res.json({msg: 'Failed to add user'});
        }
        else{
            res.json(user);
        }
    });
});
//upate
router.post('/user/update/:id', (req, res, next)=>{
    //logic to update
    logger.info("Calling /user/update/ service for :"+req.params.id);
    var id=req.params.id;
    let newUser= new User({
        _id:req.params.id,
        firstname:req.body.firstname, 
        lastname:req.body.lastname,
        email:req.body.email,
        contactNo:req.body.contactNo,
        password:req.body.password,
        role:req.body.role,
        organization:req.body.organization
    });
    logger.info("Request Object :"+newUser);
User.findOneAndUpdate({_id:id}, newUser, {new :true}, function(err, result){
    if(err){
        res.json({msg: 'Failed to update user'});
    }
    else{
        // res.json({msg: 'Contact ' +newContact.first_name+' '+newContact.last_name+ ' updated successfully'});
        logger.info("Response from Mongo :"+result);
        res.json(result);
    }

});
});

//delete user
router.delete('/user/:id', (req, res, next)=>{
    //logic to delete contact
    User.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
//searchcontactby ID
router.get('/user/search/:id', (req, res, next)=>{
    User.findById({_id: req.params.id}, function(err, user){
        if(err){
            res.json({msg: 'Failed to get data for :'+req.params.id});
        }
        else{
            res.json(user);
        }    
    });
});
//Search By Email
router.put('/user/searchByEmail', (req, res, next)=>{
    logger.info("Calling /user/searchByEmail Service for email: "+req.body.email);
    User.find({email: req.body.email}, function(err, user){
        if(err){
            res.json({msg: 'Failed to get data for :'+req.params.email});
        }
        else if(user.length>=1){
            res.json(true);
        }else{
            res.json(false);
        }  
    });
});
module.exports= router; 