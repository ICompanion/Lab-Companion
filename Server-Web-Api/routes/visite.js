const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const visiteController = controllers.visite;

const visiteRouter = express.Router();
visiteRouter.use(bodyParser.json());

/**
 * @api {get} /all get all appointments
 * @apiName getAll
 * @apiGroup visite
 *
 * @apiSuccess {int} id id of the appointment
 * @apiSuccess {date} date date of the appointment
 * @apiSuccess {String} status status of the appointment
 * @apiSuccess {int} employe_id id of the appointment
 * @apiSuccess {int} patient_id id of the appointment
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"date":"2018-07-18T15:50:00.000Z","status":"planifiée","patient_id":1,"employe_id":13},
 * {"id":3,"date":"2018-07-22T15:15:00.000Z","status":"planifiée","patient_id":1,"employe_id":4},
 * {"id":4,"date":"2018-07-21T15:15:00.000Z","status":"planifiée","patient_id":1,"employe_id":4}]"
 *
 * @apiError (Error 404) appointment No appointment found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
visiteRouter.get('/all', function(req, res){
  visiteController.getAll(function(data, state){
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
 * @api {get} /:id get an appointment by its id
 * @apiName getById
 * @apiGroup visite
 *
 * @apiSuccess {int} id id of the appointment
 * @apiSuccess {date} date date of the appointment
 * @apiSuccess {String} status status of the appointment
 * @apiSuccess {int} employe_id id of the appointment
 * @apiSuccess {int} patient_id id of the appointment
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"date":"2018-07-18T15:50:00.000Z","status":"planifiée","patient_id":1,"employe_id":13}]"
 *
 * @apiError (Error 404) appointment No appointment found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
visiteRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    visiteController.getById(req.params.id,function(data, state){
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

/**
 * @api {get} /patient/:id get all patient appointments
 * @apiName getByPatientId
 * @apiGroup visite
 *
 * @apiSuccess {int} id id of the appointment
 * @apiSuccess {date} date date of the appointment
 * @apiSuccess {String} status status of the appointment
 * @apiSuccess {int} employe_id id of the appointment
 * @apiSuccess {int} patient_id id of the appointment
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"date":"2018-07-18T15:50:00.000Z","status":"planifiée","patient_id":1,"employe_id":13}]"
 *
 * @apiError (Error 404) appointment No appointment found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
visiteRouter.get('/patient/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    visiteController.getByPatientId(req.params.id,function(data, state){
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

/**
 * @api {get} /date/:date get all appointments by date
 * @apiName getByDate
 * @apiGroup visite
 *
 * @apiSuccess {int} id id of the appointment
 * @apiSuccess {date} date date of the appointment
 * @apiSuccess {String} status status of the appointment
 * @apiSuccess {int} employe_id id of the appointment
 * @apiSuccess {int} patient_id id of the appointment
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"date":"2018-07-18T15:50:00.000Z","status":"planifiée","patient_id":1,"employe_id":13}]"
 *
 * @apiError (Error 404) appointment No appointment found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
visiteRouter.get('/date/:date', function(req, res){
  visiteController.getByDate(req.params.date,function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });

    /**
     * @api {get} /status/:status get all appointments by status
     * @apiName getByStatus
     * @apiGroup visite
     *
     * @apiSuccess {int} id id of the appointment
     * @apiSuccess {date} date date of the appointment
     * @apiSuccess {String} status status of the appointment
     * @apiSuccess {int} employe_id id of the appointment
     * @apiSuccess {int} patient_id id of the appointment
     *
     * @apiSuccessExample Success-Response:
     *"[{"id":2,"date":"2018-07-18T15:50:00.000Z","status":"planifiée","patient_id":1,"employe_id":13}]"
     *
     * @apiError (Error 404) appointment No appointment found
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     false
     *
     * @apiError (Error 500) Server error.
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 Internal server error
     *     false
     */
  visiteRouter.get('/status/:status', function(req, res){
    visiteController.getByStatus(req.params.status,function(data, state){
      if(state === false) {res.status(500).end(); return;}
      data = JSON.parse(data);
      if(data.length !== 0){
        res.json(data).status(200);
        return;
      }
      res.status(404).end();
    });
  });
});

/**
 * @api {post} /new create an appointment
 * @apiName new
 * @apiGroup visite
 *
 * @apiSuccess {int} id id of the appointment
 * @apiSuccess {date} date date of the appointment
 * @apiSuccess {String} status status of the appointment
 * @apiSuccess {int} employe_id id of the appointment
 * @apiSuccess {int} patient_id id of the appointment
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"date":"2018-07-18T15:50:00.000Z","status":"planifiée","patient_id":1,"employe_id":13}]"
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
visiteRouter.post('/new', function(req, res){
  var values = [req.body.date, req.body.status, req.body.patient_id,
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

/**
 * @api {put} /status/:status update an appointment
 * @apiName update
 * @apiGroup visite
 *
 * @apiSuccess {int} id id of the appointment
 * @apiSuccess {date} date date of the appointment
 * @apiSuccess {String} status status of the appointment
 * @apiSuccess {int} employe_id id of the appointment
 * @apiSuccess {int} patient_id id of the appointment
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"date":"2018-07-18T15:50:00.000Z","status":"planifiée","patient_id":1,"employe_id":13}]"
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {delete} /:id delete an appointment
 * @apiName deleteById
 * @apiGroup appointment
 *
 * @apiParam {int} id category id
 *
 * @apiSuccess boolean
 *
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
