const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express();
const port=process.env.PORT||3000;
app.use(bodyParser.json({extended: false})); 
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res,next)=>{
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});
app.post('/convert', (req, res,next)=>{
  let {data}=req.body;
    let bufferOne = Buffer.from(JSON.stringify(data));
    let byte = JSON.stringify(bufferOne);
    res.json(byte).end()                   
  
});
app.use((req, res,next)=>{
   res.status(404).send('<h1> Page not found </h1>');
});
const server = http.createServer(app);
server.listen(port,()=>{
  console.log(`Server Started on ${port}..`)
});