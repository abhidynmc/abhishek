const mongoose= require('mongoose');

const UserRolesSchema=mongoose.Schema({
    roleName:{
        type:String,
        require:true
    }
});

const UserRoles=module.exports=mongoose.model('user_role', UserRolesSchema);