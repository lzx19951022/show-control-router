const express = require('express');
const cgRouter = express.Router();
const {CasparCG} = require("casparcg-connection");
const { json } = require('body-parser');
const connection = new CasparCG();



cgRouter.post('/connect', (req, res, next) => {
  connection.host= req.body.ip
  connection.port = req.body.port
  connection.connect();
  setTimeout(() => {
    if(connection.connected){ 
    console.log(`cg连接状态: ${connection.connected}`)
    res.status(200).send(connection.connected);
    } else {
      res.status(500).send('连接失败')
    }
  }, 500);
})

cgRouter.post('/update', (req, res, next) => {
  data= req.body.data
  connection.cgUpdate(2,26,1,JSON.stringify({'f0':`${data}`})).then(
    res.status(200).send('ok')
  )
  
})

cgRouter.get('/status', (req, res, next) => {

    res.status(200).send(connection.connected)
  
})

module.exports = cgRouter;