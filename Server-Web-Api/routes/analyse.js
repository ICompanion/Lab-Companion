const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const analyseController = controllers.analyse;

/**
 *
 * This is the analysis routes file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */

const analyseRouter = express.Router();

analyseRouter.use(bodyParser.json());

/**
 * @api {get} /all get all analysis
 * @apiName getAll
 * @apiGroup analyse
 *
 * @apiSuccess {int} id id of the analyse
 * @apiSuccess {String} description description of the analyse
 * @apiSuccess {int} employe_id id of the employee
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {date} date_analyse date of the analyse creation
 * @apiSuccess {String} code_analyse code of the analyse
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":5,"description":null,"employe_id":4,"patient_id":"IZ500","date_analyse":"2018-02-19T23:00:00.000Z",
 * "code_analyse":"SG-MO-0002"}]"
 *
 * @apiError (Error 404) analysis No menu analysis
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {get} /:code get an analysis by it code
 * @apiName getByCode
 * @apiGroup analyse
 *
 * @apiSuccess {int} id id of the analyse
 * @apiSuccess {String} description description of the analyse
 * @apiSuccess {int} employe_id id of the employee
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {date} date_analyse date of the analyse creation
 * @apiSuccess {String} code_analyse code of the analyse
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":5,"description":null,"employe_id":4,"patient_id":"IZ500","date_analyse":"2018-02-19T23:00:00.000Z",
 * "code_analyse":"SG-MO-0002"}]"
 *
 * @apiError (Error 404) analysis No analysis found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {get} /id/:id get an analysis by it id
 * @apiName getById
 * @apiGroup analyse
 *
 * @apiSuccess {int} id id of the analyse
 * @apiSuccess {String} description description of the analyse
 * @apiSuccess {int} employe_id id of the employee
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {date} date_analyse date of the analyse creation
 * @apiSuccess {String} code_analyse code of the analyse
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":5,"description":null,"employe_id":4,"patient_id":"IZ500","date_analyse":"2018-02-19T23:00:00.000Z",
 * "code_analyse":"SG-MO-0002"}]"
 *
 * @apiError (Error 404) analysis No analysis found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
analyseRouter.get('/id/:id', function(req, res){
    analyseController.getById(req.params.id, function(data, state){
        if(state === false) {res.status(500).end(); return;}
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

/**
 * @api {get} /employe/:employe_id get an analysis by employee id
 * @apiName getByEmploye
 * @apiGroup analyse
 *
 * @apiSuccess {int} id id of the analyse
 * @apiSuccess {String} description description of the analyse
 * @apiSuccess {int} employe_id id of the employee
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {date} date_analyse date of the analyse creation
 * @apiSuccess {String} code_analyse code of the analyse
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":5,"description":null,"employe_id":4,"patient_id":"IZ500","date_analyse":"2018-02-19T23:00:00.000Z",
 * "code_analyse":"SG-MO-0002"}]"
 *
 * @apiError (Error 404) analysis No analysis found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {get} /display/:id get an analysis by id from view
 * @apiName getAnalyse
 * @apiGroup analyse
 *
 * @apiSuccess {int} id id of the analyse
 * @apiSuccess {String} description description of the analyse
 * @apiSuccess {int} employe_id id of the employee
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {date} date_analyse date of the analyse creation
 * @apiSuccess {String} code_analyse code of the analyse
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":5,"description":null,"employe_id":4,"patient_id":"IZ500","date_analyse":"2018-02-19T23:00:00.000Z",
 * "code_analyse":"SG-MO-0002"}]"
 *
 * @apiError (Error 404) analysis No analysis found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {get} /:code_analyse/resultats get analysis results
 * @apiName getAnalyseResults
 * @apiGroup analyse
 *
 * @apiSuccess {int} id id of the result
 * @apiSuccess {double} valeur value of the result
 * @apiSuccess {int} resultat_id id of the the result type
 * @apiSuccess {int} analyse_id id of the analysis
 *
 * @apiSuccessExample Success-Response:
 *[{"id":5,"valeur":"1.21","resultat_id":3,"analyse_id":"SG-MO-0001"},
 * {"id":6,"valeur":"0.27","resultat_id":4,"analyse_id":"SG-MO-0001"},
 * {"id":4,"valeur":"0.56","resultat_id":2,"analyse_id":"SG-MO-0001"}]
 *
 * @apiError (Error 404) analysis No analysis found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {get} /patient/liste/:id get patient results
 * @apiName getAnalyseResults
 * @apiGroup analyse
 *
 * @apiSuccess {double} date_analyse date of the analysis
 * @apiSuccess {int} resultat_id id of the the result type
 *
 * @apiSuccessExample Success-Response:
 * "[{"employe_id":4,"patient_id":"IZ500"]"
 *
 * @apiError (Error 404) analysis No analysis found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {post} /new create a patient
 * @apiName new
 * @apiGroup analyse
 *
 * @apiSuccess {string} code_analyse code of the analysis
 * @apiSuccess {int} employe_id id of the employee
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {date} date_analyse date of the analysis
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {post} /result/new create an analyse result
 * @apiName new
 * @apiGroup analyse
 *
 * @apiSuccess {int} valeur value of the result analysis
 * @apiSuccess {int} analyse_id id of the analysis
 * @apiSuccess {int} resultat_id date of the result
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {put} /:id update an analysis
 * @apiName update
 * @apiGroup analyse
 *
 * @apiSuccess {int} id id of the analyse
 * @apiSuccess {String} description description of the analyse
 * @apiSuccess {int} employe_id id of the employee
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {date} date_analyse date of the analyse creation
 * @apiSuccess {String} code_analyse code of the analyse
 *
 * @apiSuccessExample Success-Response:
 *"[true]"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {put} /result/:id update an analyse result
 * @apiName updateResult
 * @apiGroup analyse
 *
 * @apiSuccess {int} valeur value of the result analysis
 * @apiSuccess {int} analyse_id id of the analysis
 * @apiSuccess {int} resultat_id date of the result
 *
 * @apiSuccessExample Success-Response:
 * "[true]"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {delete} /:id delete an analysis
 * @apiName deleteById
 * @apiGroup analyse
 *
 * @apiParam {int} id analysis id
 *
 * @apiSuccess boolean
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     "parameters are not all integers"
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {delete} /result/:id delete an analysis result
 * @apiName deleteResult
 * @apiGroup analyse
 *
 * @apiParam {int} id analysis result id
 *
 * @apiSuccess boolean
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     "parameters are not all integers"
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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
