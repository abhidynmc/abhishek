//importing modules
var http = require("http");
var express= require("express");
var mongoose= require("mongoose");
var bodyparser= require("body-parser");
var cors= require("cors");
var path= require("path");

var app=express();

const userRoute= require('./routes/UserRoute');
const orgRoute=require('./routes/OrgRoute');
const orgDomainRoute=require('./routes/OrgDomainRoute');
const userRoleRoute=require('./routes/UserRolesRoute');
const loginRoute=require('./routes/loginRoute');
const incidentRoute=require('./routes/IncidentRoute');

var SERVER_NAME="localhost";

mongoose.connect("mongodb://"+SERVER_NAME+":27017/ManageAll",  { useNewUrlParser: true });
const port=3000;

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to the mongo db @ 27017');
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('Error in Database connection '+err);
    }
});

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
  }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', [orgRoute,userRoute,orgDomainRoute,userRoleRoute,loginRoute,incidentRoute]);
//testing server


app.listen(port, ()=>{
    console.log("server started at port: "+port);
})
