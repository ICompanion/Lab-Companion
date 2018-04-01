const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const patientController = controllers.patientController;

const patientRouter = express.Router();
patientRouter.use(bodyParser.json());

patientRouter.get('/all', function(req, res){
  var data;
  patientController.getAll(function(data){
    if(data !== undefined){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
    return;
  });

});

patientRouter.get('/:identifiant', function(req, res){
  var data = patientController.getByIdentifiant(req.params.identifiant);
  if(data != undefined){
    res.json().status(200);
    return;
  }
  res.status(404).end();
  return;
});

patientRouter.get('/connect/:identifiant/:password', function(req, res){
  var data;
  patientController.connect(req.params.identifiant, req.params.password, function(data){
    if(data !== undefined){
      res.json('true').status(200).end();
      return;
    }
    res.json('false').status(404).end();
    return;
  });
});

module.exports = patientRouter;
