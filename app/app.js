
const express = require('express');
const app = express(); 
app.get('/',(req, res)=>{
    res.send('<h1>Building website through node.js and express.js</h1>');
});
const server = app.listen(3000, ()=>{
  console.log('Express Server running on Localhost: 3000');
});



// const http = require('http');
// const server = http.createServer((req, res)=>{
//   res.writeHead(200,{"Content-type":"text/html"});
//   res.write("Roux Meetups");
//   res.end();
// })

// server.listen(3000);
// console.log("Go to localhost: 3000 on your browser"); 