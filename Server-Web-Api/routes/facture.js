const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const factureController = controllers.facture;

const factureRouter = express.Router();
factureRouter.use(bodyParser.json());

factureRouter.get('/all', function(req, res){
  factureController.getAll(function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

factureRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    factureController.getById(req.params.id,function(data, state){
      if(state === false) {res.status(500).end(); return;}
      data = JSON.parse(data);
      if(data.length !== 0){
        res.json(data).status(200);
        return;
      }
      res.status(404).end();
      return;
    });
  }
  else{
      res.json("parameter is not an integer").status(500).end();
  }});

factureRouter.get('/patient/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    factureController.getByPatientId(req.params.id,function(data, state){
      if(state === false) {res.status(500).end(); return;}
      data = JSON.parse(data);
      if(data.length !== 0){
        res.json(data).status(200);
        return;
      }
      res.status(404).end();
      return;
    });
  }
  else{
      res.json("parameter is not an integer").status(500).end();
  }});

factureRouter.post('/new', function(req, res){
  var values = [req.body.montant, req.body.date_creation, req.body.acquitte, req.body.adresse_facturation,
                req.body.visite_id, req.body.patient_id, req.body.analyse_id];

  factureController.new(values, function(state){
    if(state === true)
  {
    res.json(state).status(200).end();
    return;
  }
  res.status(500).end();
  });
});

factureRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    factureController.update(columns, values, req.params.id, function(state){
      if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }
    res.status(500).end();
    return;
    });
  }
  else{
      res.json("parameter is not an integer").status(500).end();
  }
});

factureRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    factureController.deleteById(req.params.id, function(state){
      if(state === true)
      {
        res.json(state).status(200).end();
        return;
      }

      res.status(500).end();
      return;
    });
  }
  else{
      res.json("parameter is not an integer").status(500).end();
  }
});

module.exports = factureRouter;
