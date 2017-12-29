const express= require("express");
const router= express.Router();

const Contact= require('../models/contacts');

//retrieving data
router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    });
});

//add contact
router.post('/contact', (req, res, next)=>{
    //logic to add contact
    let newContact= new Contact({
        first_name:req.body.first_name, 
        last_name:req.body.last_name,
        phone:req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'Failed to add contacts'});
        }
        else{
            res.json({msg: 'Contacts added successfully' });
        }
    });
    

});
router.post('/contact/update/:id', (req, res, next)=>{
    //logic to update
    var id=req.params.id;
    let newContact= new Contact({
        _id:req.params.id,
        first_name:req.body.first_name, 
        last_name:req.body.last_name,
        phone:req.body.phone
    });

Contact.findByIdAndUpdate(id, newContact, {new :true}, function(err, result){
    if(err){
        res.json({msg: 'Failed to update contact'});
    }
    else{
        // res.json({msg: 'Contact ' +newContact.first_name+' '+newContact.last_name+ ' updated successfully'});
        res.json(result);
    }

});
});

//delete contact
router.delete('/contact/:id', (req, res, next)=>{
    //logic to delete contact
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

router.get('/contact/search/:id', (req, res, next)=>{
    Contact.findById({_id: req.params.id}, function(err, contact){
        if(err){
            res.json({msg: 'Failed to get data for :'+req.params.id});
        }
        else{
            res.json(contact);
        }    
    });
});

module.exports= router; 