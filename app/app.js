
const express = require('express');
const app = express(); 
const dataFile = require('./data/data.json');// requiring data.json; 
app.set('port', process.env.PORT ||3000); // setting default to 3000 when user did not declear port number


app.get('/',(req, res)=>{
    let info = ''; 
    dataFile.speakers.forEach((item)=>{
      info += `
       <li> 
         <h2>${item.name}</h2> 
         <p>${item.summary}</p>
      `;
    });

    res.send(`
       <h1> Roux Academy Meetup</h1>
       ${info}
    `);
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