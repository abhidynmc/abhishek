const mongoose= require('mongoose');

const OrganizationDataSchema=mongoose.Schema({
    orgName:{
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
    companySize:{
        type:Number,
        require:true
    },
    domain:{
        type:String,
        require:true
    },
    owner:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default: "Employee"
    }
});

const Org=module.exports=mongoose.model('organization', OrganizationDataSchema);