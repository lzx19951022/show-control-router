const express = require('express');
const atemRouter = express.Router();
const { Atem } = require('atem-connection');
const { InputPropertiesUpdateCommand } = require('atem-connection/dist/commands');
const myAtem = new Atem();
myAtem.on('stateChanged', function(err, state) {
  console.log(state); // catch the ATEM state.
});

myAtem.on('error', console.log)
myAtem.connect('192.168.10.240')
myAtem.on("disconnected", () => {
myAtem.connect('192.168.10.240')
})

console.log(myAtem.status)
console.log(myAtem.state)


atemRouter.get('/test', (req, res, next) => {
      myAtem.changeProgramInput(3).then(() =>{
        console.log('success')
        res.status(200).send('connected');
      })
      
    next();
})

atemRouter.get('/test2', (req, res, next) => {
  myAtem.macroRun(3).then(() =>{
    console.log('success')
    res.status(200).send('connected');
  })
next();
});




module.exports = atemRouter;