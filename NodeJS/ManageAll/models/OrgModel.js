const mongoose= require('mongoose');

const OrganizationDataSchema=mongoose.Schema({
    orgname:{
        type:String,
        require:true
    },
    about:{
        type:String,
        require:true
    },
    founder:{
        type:String,
        require:true
    },
    foundedIn:{
        type:Number,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    companySize:{
        type:Number,
        require:true
    }
});

const Org=module.exports=mongoose.model('Organization', OrganizationDataSchema);