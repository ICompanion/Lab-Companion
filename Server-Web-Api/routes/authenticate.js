const express = require('express');
const authenticate = express.Router();
const controllers = require('../controllers');
const anthenticateController = controllers.authenticate;

authenticate.get('/:name/:password', function(req, res){
  anthenticateController.signIn([req.params.name, req.params.password], function(state, name, id){
    anthenticateController.connect(req, res, state, name, id);
  });
});

authenticate.get('/check', function(req, res) {
  anthenticateController.check(req, res, function(state){
    if(state === true){
      res.json(state).status(200);
    }
  });
});

authenticate.get('/disconnect', function(req, res){
  res.clearCookie('x-access-token').json("disconnected").status(200).end();
});

module.exports = authenticate;
