const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const employeController = controllers.employe;

const employeRouter = express.Router();
employeRouter.use(bodyParser.json());

employeRouter.get('/all', function(req, res){
  employeController.getAll(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

employeRouter.get('/:identifiant', function(req, res){
  employeController.getByIdentifiant(req.params.identifiant,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

employeRouter.get('/name/:nom', function(req, res){
  employeController.getByName(req.params.nom,function(data){
    data = JSON.parse(data);
    console.log(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

employeRouter.get('/id/:id', function(req, res){
  employeController.getById(req.params.id,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

module.exports = employeRouter;
