//importing modules
var http = require("http");
var express= require("express");
var mongoose= require("mongoose");
var bodyparser= require("body-parser");
var cors= require("cors");
var path= require("path");

var app=express();

const route= require('./routes/route');

var SERVER_NAME="localhost";

// mongoose.connect("ongodb://"+SERVER_NAME+"27017/manageall/")
const port=3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);
//testing server
app.get('/', (req, res)=>{
    res.send('foobar');
});

app.listen(port, ()=>{
    console.log("server started at port: "+port);
})
// http.createServer(function (request, response) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
//  }).listen(8081); 
 // Console will print the message