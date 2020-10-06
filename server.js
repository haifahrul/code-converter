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
  try{
  let {to,data}=req.body;
  if(to=='Byte'){
      let bufferOne = Buffer.from(JSON.stringify(data));
      let byte = JSON.stringify(bufferOne);
      res.json(byte).end()  
  }
  else{
    const dataArr=data.split(',')
    var str = String.fromCharCode.apply(String, dataArr);
    var obj = JSON.parse(str);
    console.log("obj", obj)
    res.json({data:obj,text:true}).end()  
  }
}catch{
  res.status(400).end()
}       
  
});
app.use((req, res,next)=>{
   res.status(404).send('<h1> Page not found </h1>');
});
const server = http.createServer(app);
server.listen(port,()=>{
  console.log(`Server Started on ${port}..`)
});