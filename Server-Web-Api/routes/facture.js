const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const factureController = controllers.facture;

const factureRouter = express.Router();
factureRouter.use(bodyParser.json());

factureRouter.get('/all', function(req, res){
  factureController.getAll(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

factureRouter.get('/:id', function(req, res){
  factureController.getById(req.params.id,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

factureRouter.get('/patient/:id', function(req, res){
  factureController.getByPatientId(req.params.id,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

module.exports = factureRouter;
