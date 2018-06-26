const http = require('http');
const server = http.createServer((req, res)=>{
  res.writeHead(200,{"Content-type":"text/html"});
  res.write("Roux Meetups");
  res.end();
})

server.listen(3000);
console.log("Go to localhost: 3000 on your browser"); 