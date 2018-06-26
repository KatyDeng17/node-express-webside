
const express = require('express');
const app = express(); 
const dataFile = require('./data/data.json');// requiring data.json; 
app.set('port', process.env.PORT ||3000); // setting default to 3000 when user did not declear port number


app.get('/',(req, res)=>{
    res.send('<h1>Building website through node.js and express.js</h1>');
});
const server = app.listen(app.get('port'), ()=>{
  console.log('Express Server running on Localhost: ' + app.get('port'));
});



// const http = require('http');
// const server = http.createServer((req, res)=>{
//   res.writeHead(200,{"Content-type":"text/html"});
//   res.write("Roux Meetups");
//   res.end();
// })

// server.listen(3000);
// console.log("Go to localhost: 3000 on your browser"); 