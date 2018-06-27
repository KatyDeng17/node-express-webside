const express = require('express');
const router = express.Router();


router.get('/speakers/:speakerid',(req, res)=>{
    let dataFile = req.app.get('appData');// getting the data from dataFile 
    let speaker = dataFile.speakers[req.params.speakerid];

    res.send(`
      <link rel = "stylesheet" type = "text/css" href= "/css/style.css">
      <h1> ${speaker.title}</h1>
      <h2> ${speaker.name}</h2>
      <img src = " /images/speakers/${speaker.shortname}_tn.jpg" alt = "speaker" >
      <p> ${speaker.summary}</p>
    `);
});

router.get('/speakers',(req, res)=>{
    let info = ''; 
    let dataFile = req.app.get('appData');// getting the data from dataFile 

    dataFile.speakers.forEach((item)=>{
      info += `
      <li> 
        <h2>${item.name}</h2> 
        <img src = " /images/speakers/${item.shortname}_tn.jpg" alt = "speaker" >
        <p>${item.summary}</p>
      </li>
      `;
    });

    res.send(`
      <link rel = "stylesheet" type = "text/css" href= "css/style.css">
      <h1> Roux Academy Meetup</h1>
      ${info}
    `);
});
module.exports = router;