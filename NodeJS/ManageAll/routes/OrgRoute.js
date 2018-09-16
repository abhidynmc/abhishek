
var jsonQuery = require('json-query');
const express= require("express");
const router= express.Router();
var logger = require('logger').createLogger();

// const Contact= require('../models/contacts');
const Org=require('../models/OrgModel');

//- - Organizational Services  - -
// var data = {
//     orgData: [
//       {name: 'TCS', country: 'NZ'},
//       {name: 'Wipro', country : 'AU'},
//       {name: 'Infi', country: 'NZ'}
//     ]
//   }
  
// router.post("/organization/searchByName/", (req, res, next)=>{
//     var result=jsonQuery('orgData[name='+req.body.name+'].name', {
//         data:data
//     }).value;
//    // var result=req.params.name;
//     //  console.log(result);
//     res.json(result);    
// });

//retrieving data
router.get('/orgs', (req, res, next)=>{
    console.log("Calling Organizations");
    Org.find(function(err, organizations){
        res.json(organizations);
    })
    
});

//add org
router.post('/org', (req, res, next)=>{
    //logic to add 
    logger.info("Calling /org for req: "+JSON.stringify(req.body));
    let newOrg= new Org({
        orgName:req.body.orgName,
        about:req.body.about,
        founder:req.body.founder,
        foundedIn:req.body.foundedIn,
        location:req.body.location,
        companySize:req.body.companySize,
        domain:req.body.domain.domainName,
        owner:req.body.owner,
        role:req.body.role.roleName
    });
    logger.info("Request Object : "+newOrg);
    newOrg.save((err, org)=>{
        if(err){
            res.json({msg: 'Failed to add org'});
        }
        else{
            res.json(org);
        }
    });
});
//upate
router.put('/org/update/:id', (req, res, next)=>{
    //logic to update
    var id=req.params.id;
    let newOrg = new Org({
        _id:req.params.id,
        orgName:req.body.orgName,
        about:req.body.about,
        founder:req.body.founder,
        foundedIn:req.body.foundedIn,
        location:req.body.location,
        companySize:req.body.companySize,
        domain:req.body.domain,
        owner:req.body.owner,
        role:req.body.role
    });
    
Org.findByIdAndUpdate(id, newOrg, {new :true}, function(err, result){
    if(err){
        res.json({msg: 'Failed to update org'});
    }
    else{
        res.json(result);
    }

});
});

//delete user
router.delete('/org/delete/:id', (req, res, next)=>{
    //logic to delete contact
    Org.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
//searchorgby ID
router.get('/org/search/:id', (req, res, next)=>{
    Org.findById({_id: req.params.id}, function(err, org){
        if(err){
            res.json({msg: 'Failed to get data for :'+req.params.id});
        }
        else{
            res.json(org);
        }    
    });
});
//searchOrgbyName
router.put("/org/searchByName/", (req,res,next)=>{
    Org.find({orgName: req.body.orgName}, function(err, org){
        if(err){
            res.json({msg: 'Failed to get data for :'+req.params.id});
        }
        else if(org.length>=1){
            res.json(true);
        }else{
            res.json(false);
        }    
    });
})
module.exports= router;