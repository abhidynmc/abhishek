const mongoose= require('mongoose');

const UserDataSchema=mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    contactNo:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:'employee'
    },
    organization:{
        type:String, 
        require:true
    }
});

const User=module.exports=mongoose.model('User', UserDataSchema);