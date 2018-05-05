const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const analyseController = controllers.analyse;

const analyseRouter = express.Router();
analyseRouter.use(bodyParser.json());

analyseRouter.get('/all', function(req, res){
  analyseController.getAll(function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

analyseRouter.get('/code_analyse/:code', function(req, res){
  analyseController.getByCode(req.params.code, function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

analyseRouter.get('/patient/:patient_id', function(req, res){
  analyseController.getPatientAnalyses(req.params.patient_id, function(data){
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

module.exports = analyseRouter;
