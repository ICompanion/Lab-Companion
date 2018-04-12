const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const patientController = controllers.patientController;

const patientRouter = express.Router();
patientRouter.use(bodyParser.json());

patientRouter.get('/all', function(req, res){
  patientController.getAll(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });

});

patientRouter.get('/:identifiant', function(req, res){
  patientController.getByIdentifiant(req.params.identifiant,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

module.exports = patientRouter;
