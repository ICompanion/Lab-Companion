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
  visiteController.getById(req.params.id,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

visiteRouter.get('/patient/:id', function(req, res){
  visiteController.getByPatientId(req.params.id,function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
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

module.exports = visiteRouter;
