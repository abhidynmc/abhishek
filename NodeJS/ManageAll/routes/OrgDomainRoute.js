
var jsonQuery = require('json-query');
const express= require("express");
const router= express.Router();
var logger = require('logger').createLogger();
// const Contact= require('../models/contacts');
const OrgDomain=require('../models/OrgDomainModel');

//- - Organizational Domain Services  - -

//retrieving data
router.get('/orgs/domains', (req, res, next)=>{
    logger.info("Calling /orgs/domains/ service");
    OrgDomain.find(function(err, domains){
        res.json(domains);
    })
    
});

//add 
router.post('/org/domain', (req, res, next)=>{
    //logic to add contact
    logger.info("Calling /org/domain with req"+JSON.stringify(req.body));
    let newOrgDomain= new OrgDomain({
        domainName:req.body.domainName,
    });
    newOrgDomain.save((err, domain)=>{
        if(err){
            res.json({msg: 'Failed to add domain'});
        }
        else{
            res.json({msg: 'Domain has been successfully added :'}+domain);
        }
    });
});
//upate
router.put('/org/domain/update/:id', (req, res, next)=>{
    //logic to update
    logger.info("Calling /org/domain/update/ service with id:"+req.params.id+" and req body: "+JSON.stringify(req.body));
    var id=req.params.id;
    let newOrgDomain = new OrgDomain({
        _id:req.params.id,
       domainName:req.body.domainName,
    });
    
OrgDomain.findByIdAndUpdate(id, newOrgDomain, {new :true}, function(err, result){
    if(err){
        res.json({msg: 'Failed to update domain'});
    }
    else{
        res.json(result);
    }

});
});

//delete 
router.delete('/org/domain/delete/:id', (req, res, next)=>{
    //logic to delete
    logger.info("Calling /org/domain/delete/ service with id:"+req.params.id);
    OrgDomain.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
//search by ID
router.get('/org/domain/search/:id', (req, res, next)=>{
    logger.info("Calling /org/domain/search/ service with id: "+req.params.id)
    OrgDomain.findById({_id: req.params.id}, function(err, domain){
        if(err){
            res.json({msg: 'Failed to get data for :'+req.params.id});
        }
        else{
            res.json(domain);
        }    
    });
});

module.exports= router;