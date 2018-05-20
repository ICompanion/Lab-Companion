const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const visiteController = controllers.visite;

const visiteRouter = express.Router();
visiteRouter.use(bodyParser.json());

visiteRouter.get('/all', function(req, res){
  visiteController.getAll(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

visiteRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    visiteController.getById(req.params.id,function(data){
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

visiteRouter.get('/patient/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    visiteController.getByPatientId(req.params.id,function(data){
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

visiteRouter.get('/date/:date', function(req, res){
  visiteController.getByDate(req.params.date,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });

  visiteRouter.get('/status/:status', function(req, res){
    visiteController.getByStatus(req.params.status,function(data){
      data = JSON.parse(data);
      if(data.length !== 0){
        res.json(data).status(200);
        return;
      }
      res.status(404).end();
    });
  });
});

visiteRouter.post('/new', function(req, res){
  var values = [req.body.date, req.body.heure, req.body.status, req.body.patient_id,
                req.body.employe_id];

  visiteController.new(values, function(state){
    if(state === true)
  {
    res.json(state).status(200).end();
    return;
  }
  res.status(500).end();
  });
});

visiteRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    visiteController.update(columns, values, req.params.id, function(state){
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

visiteRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    visiteController.deleteById(req.params.id, function(state){
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


module.exports = visiteRouter;
