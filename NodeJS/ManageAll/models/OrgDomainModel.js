const mongoose= require('mongoose');

const OrgDomainSchema=mongoose.Schema({
    domainName:{
        type:String,
        require:true
    }
});

const OrgDomain=module.exports=mongoose.model('organization_Domain', OrgDomainSchema);