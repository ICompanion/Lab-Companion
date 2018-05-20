const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const resultatController = controllers.resultat;

const resultatRouter = express.Router();
resultatRouter.use(bodyParser.json());

resultatRouter.get('/all', function(req, res){
  resultatController.getAll(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

resultatRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    resultatController.getById(req.params.id,function(data){
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
  }
});

resultatRouter.get('/categorie/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    resultatController.getByCategory(req.params.id, function(data){
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
  }
});

resultatRouter.post('/new', function(req, res){
  var values = [req.body.nom, req.body.description, req.body.valeur_min,
                req.body.valeur_max, req.body.categorie_id];

  resultatController.new(values, function(state){
    if(state === true)
  {
    res.json(state).status(200).end();
    return;
  }
  res.status(500).end();
  });
});

resultatRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    resultatController.update(columns, values, req.params.id, function(state){
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

resultatRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    resultatController.deleteById(req.params.id, function(state){
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

module.exports = resultatRouter;
