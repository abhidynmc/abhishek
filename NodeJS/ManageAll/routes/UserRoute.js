
var jsonQuery = require('json-query');
const express= require("express");
const router= express.Router();

// const Contact= require('../models/contacts');
const User=require('../models/UserModel');

var data = {
    orgData: [
      {name: 'TCS', country: 'NZ'},
      {name: 'Wipro', country : 'AU'},
      {name: 'Infi', country: 'NZ'}
    ]
  }
  
router.post("/organization/search/", (req, res, next)=>{
    var result=jsonQuery('orgData[name='+req.body.name+'].name', {
        data:data
    }).value;
   // var result=req.params.name;
    //  console.log(result);
    res.json(result);    
});


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
    console.log("Calling user");
    let newUser= new User({
        firstname:req.body.firstname, 
        lastname:req.body.lastname,
        email:req.body.email,
        contactNo:req.body.contactNo,
        password:req.body.password,
        role:req.body.role
    });
    console.log(JSON.stringify(req.body));
    newUser.save((err, user)=>{
        if(err){
            res.json({msg: 'Failed to add user'});
        }
        else{
            res.json({msg: 'User has been successfully added'}+user);
        }
    });
});
//upate
router.post('/user/update/:id', (req, res, next)=>{
    //logic to update
    var id=req.params.id;
    let newUser= new User({
        _id:req.params.id,
        firstname:req.body.firstname, 
        lastname:req.body.lastname,
        email:req.body.email,
        contactNo:req.body.contactNo,
        password:req.body.password,
        role:req.body.role
    });
    
User.findByIdAndUpdate(id, newUser, {new :true}, function(err, result){
    if(err){
        res.json({msg: 'Failed to update user'});
    }
    else{
        // res.json({msg: 'Contact ' +newContact.first_name+' '+newContact.last_name+ ' updated successfully'});
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
    user.findById({_id: req.params.id}, function(err, user){
        if(err){
            res.json({msg: 'Failed to get data for :'+req.params.id});
        }
        else{
            res.json(user);
        }    
    });
});

module.exports= router;