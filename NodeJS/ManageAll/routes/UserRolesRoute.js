
const express= require("express");
const router= express.Router();
var logger = require('logger').createLogger();
const UserRoles=require('../models/UserRoles');

//- - User Role Services  - -

//retrieving data
router.get('/users/roles', (req, res, next)=>{
    logger.info("Calling /users/roles service");
    UserRoles.find(function(err, roles){
        res.json(roles);
    })
    
});

//add 
router.post('/users/role', (req, res, next)=>{
    //logic to add contact
    logger.info("Calling /users/role with req"+JSON.stringify(req.body));
    let newUserRole= new UserRoles({
        roleName:req.body.roleName,
    });
    newUserRole.save((err, role)=>{
        if(err){
            res.json({msg: 'Failed to add role'});
        }
        else{
            res.json('Role has been successfully added :'+role);
        }
    });
});
//upate
router.put('/users/role/update/:id', (req, res, next)=>{
    //logic to update
    logger.info("Calling /users/role/update/ service with id:"+req.params.id+" and req body: "+JSON.stringify(req.body));
    var id=req.params.id;
    let newUserRole = new UserRoles({
        _id:req.params.id,
       roleName:req.body.roleName,
    });
    
UserRoles.findByIdAndUpdate(id, newUserRole, {new :true}, function(err, result){
    if(err){
        res.json({msg: 'Failed to update role'});
    }
    else{
        res.json(result);
    }

});
});

//delete 
router.delete('/users/role/delete/:id', (req, res, next)=>{
    //logic to delete
    logger.info("Calling /users/role/delete/ service with id:"+req.params.id);
    UserRoles.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
//search by ID
router.get('/users/role/search/:id', (req, res, next)=>{
    logger.info("Calling /users/role/search/ service with id: "+req.params.id)
    UserRoles.findById({_id: req.params.id}, function(err, role){
        if(err){
            res.json({msg: 'Failed to get data for :'+req.params.id});
        }
        else{
            res.json(role);
        }    
    });
});

module.exports= router;