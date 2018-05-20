const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const employeController = controllers.employe;

const employeRouter = express.Router();
employeRouter.use(bodyParser.json());

employeRouter.get('/all', function(req, res){
  employeController.getAll(function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

employeRouter.get('/:identifiant', function(req, res){
  employeController.getByIdentifiant(req.params.identifiant,function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

employeRouter.get('/name/:nom', function(req, res){
  employeController.getByName(req.params.nom,function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

employeRouter.get('/id/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    employeController.getById(req.params.id,function(data, state){
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
  }
});

employeRouter.post('/new', function(req, res){
  var values = [req.body.num_secu, req.body.nom, req.body.prenom, req.body.employe_type,
               req.body.date_embauche, req.body.type_contrat, req.body.adresse,
               req.body.ville, req.body.cp, req.body.identifiant, req.body.password,
               req.body.mail];

  employeController.new(values, function(state){
    if(state === true)
  {
    res.json(state).status(200).end();
    return;
  }
  res.status(500).end();
  });
});

employeRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    employeController.update(columns, values, req.params.id, function(state){
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

employeRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    employeController.deleteById(req.params.id, function(state){
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

module.exports = employeRouter;
