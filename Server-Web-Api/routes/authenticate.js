const express = require('express');
const authenticate = express.Router();
const controllers = require('../controllers');
const authenticateController = controllers.authenticate;

authenticate.get('/:name/:password', function(req, res){
  authenticateController.signIn([req.params.name, req.params.password], function(state, name, id){
    authenticateController.connect(req, res, state, name, id);
  });
});

authenticate.get('/employee/:login/:password', function(req, res){
    authenticateController.employeeConnection([req.params.login, req.params.password], function(data, state){
        if(state === false) {res.status(500).end(); return;}
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

authenticate.get('/check', function(req, res) {
  authenticateController.check(req, res, function(state){
    if(state === true){
      res.json(state).status(200);
    }
  });
});

authenticate.get('/infos', function(req, res) {
    authenticateController.getInfos(req, res, function(state){
        if(state === true){
            res.json(state).status(200);
        }
    });
});

authenticate.get('/disconnect', function(req, res){
  res.clearCookie('x-access-token').json("disconnected").status(200).end();
});

module.exports = authenticate;
