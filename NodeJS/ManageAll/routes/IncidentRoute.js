
const express= require("express");
const router= express.Router();
var logger = require('logger').createLogger();
const Incident=require('../models/IncidentModel');

//- - IncidentModel Services  - -

//retrieving data
router.get('/console/incident', (req, res, next)=>{
    logger.info("Calling /console/incidents service");
    Incident.find(function(err, incidents){
        res.json(incidents);
    })
    
});

//add 
router.post('/console/incident', (req, res, next)=>{
    logger.info("Calling /console/incident with req"+JSON.stringify(req.body));
    let newIncident= new Incident({
        incidentTicket:req.body.incidentTicket,
        teamId:req.body.teamId,
        createdBy:req.body.createdBy,
        updatedBy:req.body.updateBy,
        description:req.body.description,
        applicationId:req.body.applicationId,
        severityId:req.body.severityId,
        configurableItem:req.body.configurableItem,
        status:req.body.status,
        reportingTime:req.body.reportingTime,
        resolutionSummary:req.body.resolutionSummary,
        rootCause:req.body.rootCause,
        resolutionTime:req.body.resolutionTime
    });
    newIncident.save((err, incident)=>{
        if(err){
            res.json({msg: 'Failed to add incident'});
        }
        else{
            res.json(incident);
        }
    });
});

//upate
router.put('/console/incident/update/:id', (req, res, next)=>{
    //logic to update
    logger.info("Calling /console/incident/update/ service with id:"+req.params.id+" and req body: "+JSON.stringify(req.body));
    var id=req.params.id;
    let newIncident = new Incident({
        _id:req.params.id,
        incidentTicket:req.body.incidentTicket,
        teamId:req.body.teamId,
        createdBy:req.body.createdBy,
        updatedBy:req.body.updateBy,
        description:req.body.description,
        applicationId:req.body.applicationId,
        severityId:req.body.severityId,
        configurableItem:req.body.configurableItem,
        status:req.body.status,
        reportingTime:req.body.reportingTime,
        resolutionSummary:req.body.resolutionSummary,
        rootCause:req.body.rootCause,
        resolutionTime:req.body.resolutionTime
    });
    
Incident.findByIdAndUpdate(id, newIncident, {new :true}, function(err, result){
    if(err){
        res.json({msg: 'Failed to update incident'});
    }
    else{
        res.json(result);
    }

});
});

//delete 
router.delete('/console/incident/delete/:id', (req, res, next)=>{
    //logic to delete
    logger.info("Calling /console/incident/delete/ service with id:"+req.params.id);
    Incident.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
//search by ID
router.get('/console/incident/:id', (req, res, next)=>{
    logger.info("Calling /console/incident/ service with id: "+req.params.id)
    Incident.findById({_id: req.params.id}, function(err, role){
        if(err){
            res.json({msg: 'Failed to get data for :'+req.params.id});
        }
        else{
            res.json(role);
        }    
    });
});

router.put('/console/incident/advancedSearch', (req, res, next)=>{
    logger.info("Calling /console/incident/advancedSearch service with req"+JSON.stringify(req.body));
    var flag=false;
    if(req.body.incidentTicket!=null && req.body.teamId!=null && req.body.createdBy!=null && req.body.updatedBy!=null && req.body.applicationId!=null && req.body.severityId!=null && 
        req.body.configurableItem!=null && req.body.status!=null && req.body.reportingTime!=null && req.body.rootCause!=null && req.body.resolutionTime!=null &&
        req.body.description!=null){
        var searchArray= new Incident({
            incidentTicket:req.body.incidentTicket,
            teamId:req.body.teamId,
            createdBy:req.body.createdBy,
            updatedBy:req.body.updateBy,
            description:req.body.description,
            applicationId:req.body.applicationId,
            severityId:req.body.severityId,
            configurableItem:req.body.configurableItem,
            status:req.body.status,
            reportingTime:req.body.reportingTime,
            rootCause:req.body.rootCause,
            resolutionTime:req.body.resolutionTime
        });
        }else if(req.body.incidentTicket!=null && req.body.teamId!=null && req.body.createdBy!=null && req.body.updatedBy!=null && req.body.applicationId!=null && req.body.severityId!=null && 
            req.body.configurableItem!=null && req.body.status!=null && req.body.reportingTime!=null && req.body.rootCause!=null && req.body.resolutionTime!=null){
            var searchArray= new Incident({
                incidentTicket:req.body.incidentTicket,
                teamId:req.body.teamId,
                createdBy:req.body.createdBy,
                updatedBy:req.body.updateBy,
                applicationId:req.body.applicationId,
                severityId:req.body.severityId,
                configurableItem:req.body.configurableItem,
                status:req.body.status,
                reportingTime:req.body.reportingTime,
                rootCause:req.body.rootCause,
                resolutionTime:req.body.resolutionTime
            });
            }else if(req.body.incidentTicket!=null && req.body.teamId!=null && req.body.createdBy!=null && req.body.updatedBy!=null && req.body.applicationId!=null && req.body.severityId!=null && 
                req.body.configurableItem!=null && req.body.status!=null && req.body.reportingTime!=null && req.body.rootCause!=null){
                var searchArray= new Incident({
                    incidentTicket:req.body.incidentTicket,
                    teamId:req.body.teamId,
                    createdBy:req.body.createdBy,
                    updatedBy:req.body.updateBy,
                    applicationId:req.body.applicationId,
                    severityId:req.body.severityId,
                    configurableItem:req.body.configurableItem,
                    status:req.body.status,
                    reportingTime:req.body.reportingTime,
                    rootCause:req.body.rootCause
                });
                }else if(req.body.incidentTicket!=null && req.body.teamId!=null && req.body.createdBy!=null && req.body.updatedBy!=null && req.body.applicationId!=null && req.body.severityId!=null && 
                    req.body.configurableItem!=null && req.body.status!=null && req.body.reportingTime!=null){
                    var searchArray= new Incident({
                        incidentTicket:req.body.incidentTicket,
                        teamId:req.body.teamId,
                        createdBy:req.body.createdBy,
                        updatedBy:req.body.updateBy,
                        applicationId:req.body.applicationId,
                        severityId:req.body.severityId,
                        configurableItem:req.body.configurableItem,
                        status:req.body.status,
                        reportingTime:req.body.reportingTime
                    });
                    }else if(req.body.incidentTicket!=null && req.body.teamId!=null && req.body.createdBy!=null && req.body.updatedBy!=null && req.body.applicationId!=null && req.body.severityId!=null && 
                        req.body.configurableItem!=null && req.body.status!=null){
                        var searchArray= new Incident({
                            incidentTicket:req.body.incidentTicket,
                            teamId:req.body.teamId,
                            createdBy:req.body.createdBy,
                            updatedBy:req.body.updateBy,
                            applicationId:req.body.applicationId,
                            severityId:req.body.severityId,
                            configurableItem:req.body.configurableItem,
                            status:req.body.status
                        });
                        }else if(req.body.incidentTicket!=null && req.body.teamId!=null && req.body.createdBy!=null && req.body.updatedBy!=null && req.body.applicationId!=null && req.body.severityId!=null && 
                            req.body.configurableItem!=null){
                            var searchArray= new Incident({
                                incidentTicket:req.body.incidentTicket,
                                teamId:req.body.teamId,
                                createdBy:req.body.createdBy,
                                updatedBy:req.body.updateBy,
                                applicationId:req.body.applicationId,
                                severityId:req.body.severityId,
                                configurableItem:req.body.configurableItem
                            });
                            }else if(req.body.incidentTicket!=null && req.body.teamId!=null && req.body.createdBy!=null && req.body.updatedBy!=null && req.body.applicationId!=null && req.body.severityId!=null){
                                var searchArray= new Incident({
                                    incidentTicket:req.body.incidentTicket,
                                    teamId:req.body.teamId,
                                    createdBy:req.body.createdBy,
                                    updatedBy:req.body.updateBy,
                                    applicationId:req.body.applicationId,
                                    severityId:req.body.severityId
                                });
                                }else if(req.body.incidentTicket!=null && req.body.teamId!=null && req.body.createdBy!=null && req.body.updatedBy!=null && req.body.applicationId!=null){
                                    var searchArray= new Incident({
                                        incidentTicket:req.body.incidentTicket,
                                        teamId:req.body.teamId,
                                        createdBy:req.body.createdBy,
                                        updatedBy:req.body.updateBy,
                                        applicationId:req.body.applicationId
                                    });
                                    }else if(req.body.incidentTicket!=null && req.body.teamId!=null && req.body.createdBy!=null && req.body.updatedBy!=null){
                                        var searchArray= new Incident({
                                            incidentTicket:req.body.incidentTicket,
                                            teamId:req.body.teamId,
                                            createdBy:req.body.createdBy,
                                            updatedBy:req.body.updateBy
                                        });
                                        }else if(req.body.incidentTicket!=null && req.body.teamId!=null && req.body.createdBy!=null){
                                            var searchArray= new Incident({
                                                incidentTicket:req.body.incidentTicket,
                                                teamId:req.body.teamId,
                                                createdBy:req.body.createdBy
                                            });
                                            }else if(req.body.incidentTicket!=null && req.body.teamId!=null){
                                                var searchArray= new Incident({
                                                    incidentTicket:req.body.incidentTicket,
                                                    teamId:req.body.teamId
                                                });
                                                }else if(req.body.incidentTicket!=null){
                                                    var searchArray= new Incident({
                                                        incidentTicket:req.body.incidentTicket
                                                    });
                                                    }else {
                                                        res.json({"result" : "No Query Found"});
                                                        flag=true;
                                                    }
                            
    if(flag==false){                    
    logger.info("Final Search Array :"+searchArray);                                                    
    Incident.ffind(searchArray, function(err, incident){
        if(err){
            res.json({msg: 'Failed to get data for :'+req.params.id});
        }
        else{
            res.json(incident);
        }    
    });
}
});
module.exports= router;