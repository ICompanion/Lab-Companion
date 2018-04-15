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

patientRouter.get('/name/:nom', function(req, res){
  patientController.getByName(req.params.nom,function(data){
    data = JSON.parse(data);
    console.log(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

patientRouter.get('/id/:id', function(req, res){
  patientController.getById(req.params.id,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

patientRouter.get('/cp/:cp', function(req, res){
  patientController.getByCp(req.params.cp,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

patientRouter.get('/ville/:ville', function(req, res){
  patientController.getByCity(req.params.ville,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});



module.exports = patientRouter;
