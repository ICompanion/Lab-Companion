const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const analyseController = controllers.analyse;

const analyseRouter = express.Router();
analyseRouter.use(bodyParser.json());

analyseRouter.get('/all', function(req, res){
  analyseController.getAll(function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

analyseRouter.get('/:code', function(req, res){
  analyseController.getByCode(req.params.code, function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

analyseRouter.get('/employe/:employe_id', function(req, res){
    analyseController.getByEmploye(req.params.employe_id, function(data, state){
        if(state === false) {res.status(500).end(); return;}
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

analyseRouter.get('/display/:id', function(req, res){
  analyseController.getAnalyse(req.params.id, function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
    return;
  });
});

analyseRouter.get('/:code_analyse/resultats', function(req, res){
    analyseController.getAnalyseResults(req.params.code_analyse, function(data, state){
        if(state === false) {res.status(500).end(); return;}
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
        return;
    });
});

analyseRouter.get('/patient/liste/:id', function(req, res){
    analyseController.getPatientAnalysesList(req.params.id, function(data, state){
        if(state === false) {res.status(500).end(); return;}
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
        return;
    });
});

analyseRouter.post('/new', function(req, res){
  var values = [req.body.code_analyse, req.body.description,
                req.body.employe_id, req.body.patient_id, req.body.date_analyse];

  analyseController.new(values, function(state){
    if(state === true)
  {
    res.json(state).status(200).end();
    return;
  }
  res.status(500).end();
  });
});

analyseRouter.post('/result/new', function(req, res){
  var values = [req.body.valeur, req.body.analyse_id,
                req.body.resultat_id];

  analyseController.newResult(values, function(state){
    if(state === true)
  {
    res.json(state).status(200).end();
    return;
  }
  res.status(500).end();
  });
});

analyseRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    analyseController.update(columns, values, req.params.id, function(state){
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

analyseRouter.put('/result/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    analyseController.updateResult(columns, values, req.params.id, function(state){
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

analyseRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    analyseController.deleteById(req.params.id, function(state){
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

analyseRouter.delete('/result/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    analyseController.deleteResult(req.params.id, function(state){
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

module.exports = analyseRouter;
