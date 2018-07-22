const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const factureController = controllers.facture;

const factureRouter = express.Router();
factureRouter.use(bodyParser.json());

/**
 *
 * This is the bill routes file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */

/**
 * @api {get} /all get all bill
 * @apiName getAll
 * @apiGroup facture
 *
 * @apiSuccess {int} id id of the bill
 * @apiSuccess {int} montant amount of the bill
 * @apiSuccess {Date} date_creation creation date of the bill
 * @apiSuccess boolean acquitte status of the bill
 * @apiSuccess {String} adresse_facturation facturation address of the bill
 * @apiSuccess {int} visite_id id of the appointment
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {int} analyse_id id of the analysis
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"montant":"80","date_creation":"2018-05-09T22:00:00.000Z","acquitte":true,
 * "adresse_facturation":"12 rue des chemins Paris 75002","visite_id":3,"patient_id":1,"analyse_id":1},
 * {"id":1,"montant":"70","date_creation":"2018-05-08T22:00:00.000Z","acquitte":false,
 * "adresse_facturation":"12 rue des chemins Paris 75002","visite_id":3,"patient_id":1,"analyse_id":1}]"
 *
 * @apiError (Error 404) bill No bill found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {get} /:id get a bill by its id
 * @apiName getById
 * @apiGroup facture
 *
 * @apiSuccess {int} id id of the bill
 * @apiSuccess {int} montant amount of the bill
 * @apiSuccess {Date} date_creation creation date of the bill
 * @apiSuccess boolean acquitte status of the bill
 * @apiSuccess {String} adresse_facturation facturation address of the bill
 * @apiSuccess {int} visite_id id of the appointment
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {int} analyse_id id of the analysis
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"montant":"80","date_creation":"2018-05-09T22:00:00.000Z","acquitte":true,
 * "adresse_facturation":"12 rue des chemins Paris 75002","visite_id":3,"patient_id":1,"analyse_id":1}]"
 *
 * @apiError (Error 404) bill No bill found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {get} /patient/:id get patient bills
 * @apiName getByPatientId
 * @apiGroup facture
 *
 * @apiSuccess {int} id id of the bill
 * @apiSuccess {int} montant amount of the bill
 * @apiSuccess {Date} date_creation creation date of the bill
 * @apiSuccess boolean acquitte status of the bill
 * @apiSuccess {String} adresse_facturation facturation address of the bill
 * @apiSuccess {int} visite_id id of the appointment
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {int} analyse_id id of the analysis
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"montant":"80","date_creation":"2018-05-09T22:00:00.000Z","acquitte":true,
 * "adresse_facturation":"12 rue des chemins Paris 75002","visite_id":3,"patient_id":1,"analyse_id":1}]"
 *
 * @apiError (Error 404) bill No bill found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {post} /new create a bill
 * @apiName new
 * @apiGroup facture
 *
 * @apiSuccess {int} montant amount of the bill
 * @apiSuccess {Date} date_creation creation date of the bill
 * @apiSuccess boolean acquitte status of the bill
 * @apiSuccess {String} adresse_facturation facturation address of the bill
 * @apiSuccess {int} visite_id id of the appointment
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {int} analyse_id id of the analysis
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {put} /:id update bill
 * @apiName update
 * @apiGroup facture
 *
 * @apiSuccess {int} id id of the bill
 * @apiSuccess {int} montant amount of the bill
 * @apiSuccess {Date} date_creation creation date of the bill
 * @apiSuccess boolean acquitte status of the bill
 * @apiSuccess {String} adresse_facturation facturation address of the bill
 * @apiSuccess {int} visite_id id of the appointment
 * @apiSuccess {int} patient_id id of the patient
 * @apiSuccess {int} analyse_id id of the analysis
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {delete} /:id delete a bill
 * @apiName deleteById
 * @apiGroup category
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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
