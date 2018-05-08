const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const patientController = controllers.patient;

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
  if(Number.parseInt(req.params.id))
  {
    patientController.getById(req.params.id,function(data){
      data = JSON.parse(data);
      if(data.length !== 0){
        res.json(data).status(200);
        return;
      }
      res.status(404).end();
      return;
    });
  }
  res.json("parameter is not an integer").status(500).end();
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

patientRouter.post('/new', function(req, res){
  var values = [req.body.nom, req.body.prenom, req.body.mail, req.body.numSecu,
                req.body.adresse, req.body.ville, req.body.cp, req.body.identifiant,
                req.body.password, req.body.date_naissance];

  patientController.new(values, function(state){
    if(state === true)
  {
    res.json(state).status(200).end();
    return;
  }
  res.status(500).end();
  });
});

patientRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    patientController.update(columns, values, req.params.id, function(state){
      if(state === true)
    {
      res.json(state).status(200).end();
      return;
    }
    res.status(500).end();
    return;
    });
  }
  res.json("parameter is not an integer").status(500).end();
});

patientRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    patientController.deleteById(req.params.id, function(state){
      if(state === true)
      {
        res.json(state).status(200).end();
        return;
      }

      res.status(500).end();
      return;
    });
  }
  res.json("parameter is not an integer").status(500).end();
});

module.exports = patientRouter;
