
const express = require('express');
const app = express(); 
const dataFile = require('./data/data.json');// requiring data.json; 
app.set('port', process.env.PORT || 3000); // setting default to 3000 when user did not declear port number
app.set('appData',dataFile);// sending data between different routes
app.use(express.static('app/public'));
app.use(require('./routes/index')); // using .use() to link external route
app.use(require('./routes/speakers'));


const server = app.listen(app.get('port'), ()=>{
console.log('Express Server running on Localhost: ' + app.get('port'));
})






// const http = require('http');
// const server = http.createServer((req, res)=>{
//   res.writeHead(200,{"Content-type":"text/html"});
//   res.write("Roux Meetups");
//   res.end();
// })

// server.listen(3000);
// console.log("Go to localhost: 3000 on your browser"); 