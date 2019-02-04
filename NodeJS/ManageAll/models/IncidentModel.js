const mongoose= require('mongoose');

const IncidentDataSchema=mongoose.Schema({
    incidentTicket:{
        type:String,
        require:true
    },
    teamId:{
        type:String,
        require:true
    },
    createdBy:{
        type:String,
        require:true
    },
    updatedBy:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    applicationId:{
        type:String,
        require:true
    },
    severityId:{
        type:String, 
        require:true
    },
    configurableItem:{
        type:String, 
        require:true
    },
    status:{
        type:String, 
        require:true
    },
    reportingTime:{
        type:Date, 
        require:true
    },
    resolutionSummary:{
        type:String, 
        require:true
    },
    rootCause:{
        type:String, 
        require:true
    },
    resolutionTime:{
        type:Date, 
        require:true
    }
});

const Incident=module.exports=mongoose.model('Incident', IncidentDataSchema);