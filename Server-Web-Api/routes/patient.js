const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const patientController = controllers.patient;

const patientRouter = express.Router();
patientRouter.use(bodyParser.json());

/**
 *
 * This is the patient routes file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */

/**
 * @api {get} /all get all patients
 * @apiName getAll
 * @apiGroup patient
 *
 * @apiSuccess {int} id id of the patient
 * @apiSuccess {String} nom name of the patient
 * @apiSuccess {String} prenom firstname of the patient
 * @apiSuccess {String} mail email of the patient
 * @apiSuccess {int} num_secu secu number of the patient
 * @apiSuccess {String} adresse adress of the patient
 * @apiSuccess {String} ville city of the patient
 * @apiSuccess {int} cp postal code of the patient
 * @apiSuccess {String} identifiant username of the patient
 * @apiSuccess {String} password password of the patient
 * @apiSuccess {Date} date_naissance birthdate of the patient
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":17,"nom":"Chevre","prenom":"Michel","mail":"michevre@gmail.com","num_secu":1642572288,
 * "adresse":"5 rue du sentier","ville":"Paris","cp":75002,"identifiant":"PM9870","password":"michevre",
 * "date_naissance":"1964-02-01T23:00:00.000Z"},
 * {"id":18,"nom":"Lotre","prenom":"Sandra","mail":"sandizz@gmail.com","num_secu":1982472288,
 * "adresse":"5 rue du cimetière","ville":"Paris","cp":75008,"identifiant":"MA1472","password":"sandrada",
 * "date_naissance":"1998-01-04T23:00:00.000Z"},{"id":4,"nom":"Chevre","prenom":"Michel",
 * "mail":"michevre@gmail.com","num_secu":1642572288,"adresse":"5 rue du sentier","ville":"Paris","cp":75002,
 * "identifiant":"PM9870","password":"michevre","date_naissance":"1964-02-01T23:00:00.000Z"},
 * {"id":20,"nom":"Arnould","prenom":"Honorine","mail":"arnould.honorine@live.fr","num_secu":123456789,
 * "adresse":"5 rue Diderot","ville":"Issy-Les-Moulineaux","cp":92130,"identifiant":"HNZ200",
 * "password":"dj400","date_naissance":"1998-11-20T23:00:00.000Z"},{"id":21,"nom":"Jacques","prenom":"Delmor",
 * "mail":"jacques.Delmor@live.fr","num_secu":12345678,"adresse":"1 rue du Château","ville":"Clamart",
 * "cp":92240,"identifiant":"JD500","password":"gh100","date_naissance":"1969-12-31T23:00:00.000Z"},
 * {"id":22,"nom":"Vervaine","prenom":"Paul","mail":"paul.vervaine@live.fr","num_secu":123456789,
 * "adresse":"12 rue de la portiere","ville":"Paris","cp":75002,"identifiant":"PV96","password":"pv500",
 * "date_naissance":"1996-07-15T22:00:00.000Z"},{"id":1,"nom":"Delaye","prenom":"Jack","mail":"delay.jack@live.fr",
 * "num_secu":12345,"adresse":"12 avenue de la prairie","ville":"Paris","cp":75001,"identifiant":"IZ500",
 * "password":"dj500","date_naissance":"1987-01-23T23:00:00.000Z"},
 * {"id":23,"nom":"Griezmann","prenom":"Antoine","mail":"griezou@gmail.com","num_secu":1548792534,
 * "adresse":"2 rue des champions du monde","ville":"Paris","cp":75001,"identifiant":"agriezmann","password":"pogba",
 * "date_naissance":"1991-03-20T23:00:00.000Z"}]"
 *
 * @apiError (Error 404) employee No employee found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
patientRouter.get('/all', function(req, res){
    patientController.getAll(function(data, state){
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
 * @api {get} /:identifiant get a patient by its username
 * @apiName getByIdentifiant
 * @apiGroup patient
 *
 * @apiSuccess {int} id id of the patient
 * @apiSuccess {String} nom name of the patient
 * @apiSuccess {String} prenom firstname of the patient
 * @apiSuccess {String} mail email of the patient
 * @apiSuccess {int} num_secu secu number of the patient
 * @apiSuccess {String} adresse adress of the patient
 * @apiSuccess {String} ville city of the patient
 * @apiSuccess {int} cp postal code of the patient
 * @apiSuccess {String} identifiant username of the patient
 * @apiSuccess {String} password password of the patient
 * @apiSuccess {Date} date_naissance birthdate of the patient
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":17,"nom":"Chevre","prenom":"Michel","mail":"michevre@gmail.com","num_secu":1642572288,
 * "adresse":"5 rue du sentier","ville":"Paris","cp":75002,"identifiant":"PM9870","password":"michevre",
 * "date_naissance":"1964-02-01T23:00:00.000Z"}]"
 *
 * @apiError (Error 404) patient No patient found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
patientRouter.get('/:identifiant', function(req, res){
  patientController.getByIdentifiant(req.params.identifiant, function(data, state){
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
 * @api {get} /name/:nom get a patient by its name
 * @apiName getByName
 * @apiGroup patient
 *
 * @apiSuccess {int} id id of the patient
 * @apiSuccess {String} nom name of the patient
 * @apiSuccess {String} prenom firstname of the patient
 * @apiSuccess {String} mail email of the patient
 * @apiSuccess {int} num_secu secu number of the patient
 * @apiSuccess {String} adresse adress of the patient
 * @apiSuccess {String} ville city of the patient
 * @apiSuccess {int} cp postal code of the patient
 * @apiSuccess {String} identifiant username of the patient
 * @apiSuccess {String} password password of the patient
 * @apiSuccess {Date} date_naissance birthdate of the patient
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":17,"nom":"Chevre","prenom":"Michel","mail":"michevre@gmail.com","num_secu":1642572288,
 * "adresse":"5 rue du sentier","ville":"Paris","cp":75002,"identifiant":"PM9870","password":"michevre",
 * "date_naissance":"1964-02-01T23:00:00.000Z"}]"
 *
 * @apiError (Error 404) patient No patient found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
patientRouter.get('/name/:nom', function(req, res){
  patientController.getByName(req.params.nom, function(data, state){
    if(state === false) {res.status(500).end(); return;}
    data = JSON.parse(data);
    console.log(data);
    if(data.length !== 0){
      res.json(data).status(200);
      return;
    }
    res.status(404).end();
  });
});

/**
 * @api {get} /id/:id get a patient by its id
 * @apiName getById
 * @apiGroup patient
 *
 * @apiSuccess {int} id id of the patient
 * @apiSuccess {String} nom name of the patient
 * @apiSuccess {String} prenom firstname of the patient
 * @apiSuccess {String} mail email of the patient
 * @apiSuccess {int} num_secu secu number of the patient
 * @apiSuccess {String} adresse adress of the patient
 * @apiSuccess {String} ville city of the patient
 * @apiSuccess {int} cp postal code of the patient
 * @apiSuccess {String} identifiant username of the patient
 * @apiSuccess {String} password password of the patient
 * @apiSuccess {Date} date_naissance birthdate of the patient
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":17,"nom":"Chevre","prenom":"Michel","mail":"michevre@gmail.com","num_secu":1642572288,
 * "adresse":"5 rue du sentier","ville":"Paris","cp":75002,"identifiant":"PM9870","password":"michevre",
 * "date_naissance":"1964-02-01T23:00:00.000Z"}]"
 *
 * @apiError (Error 404) patient No patient found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
patientRouter.get('/id/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    patientController.getById(req.params.id,function(data, state){
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
 * @api {get} /cp/:cp get a patients by postal code
 * @apiName getByCp
 * @apiGroup patient
 *
 * @apiSuccess {int} id id of the patient
 * @apiSuccess {String} nom name of the patient
 * @apiSuccess {String} prenom firstname of the patient
 * @apiSuccess {String} mail email of the patient
 * @apiSuccess {int} num_secu secu number of the patient
 * @apiSuccess {String} adresse adress of the patient
 * @apiSuccess {String} ville city of the patient
 * @apiSuccess {int} cp postal code of the patient
 * @apiSuccess {String} identifiant username of the patient
 * @apiSuccess {String} password password of the patient
 * @apiSuccess {Date} date_naissance birthdate of the patient
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":17,"nom":"Chevre","prenom":"Michel","mail":"michevre@gmail.com","num_secu":1642572288,
 * "adresse":"5 rue du sentier","ville":"Paris","cp":75002,"identifiant":"PM9870","password":"michevre",
 * "date_naissance":"1964-02-01T23:00:00.000Z"}]"
 *
 * @apiError (Error 404) patient No patient found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
patientRouter.get('/cp/:cp', function(req, res){
  patientController.getByCp(req.params.cp,function(data, state){
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
 * @api {get} /ville/:ville get a patients by city
 * @apiName getByCity
 * @apiGroup patient
 *
 * @apiSuccess {int} id id of the patient
 * @apiSuccess {String} nom name of the patient
 * @apiSuccess {String} prenom firstname of the patient
 * @apiSuccess {String} mail email of the patient
 * @apiSuccess {int} num_secu secu number of the patient
 * @apiSuccess {String} adresse adress of the patient
 * @apiSuccess {String} ville city of the patient
 * @apiSuccess {int} cp postal code of the patient
 * @apiSuccess {String} identifiant username of the patient
 * @apiSuccess {String} password password of the patient
 * @apiSuccess {Date} date_naissance birthdate of the patient
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":17,"nom":"Chevre","prenom":"Michel","mail":"michevre@gmail.com","num_secu":1642572288,
 * "adresse":"5 rue du sentier","ville":"Paris","cp":75002,"identifiant":"PM9870","password":"michevre",
 * "date_naissance":"1964-02-01T23:00:00.000Z"}]"
 *
 * @apiError (Error 404) patient No patient found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
patientRouter.get('/ville/:ville', function(req, res){
  patientController.getByCity(req.params.ville,function(data, state){
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
 * @api {post} /new create a patient
 * @apiName new
 * @apiGroup patient
 *
 * @apiSuccess {String} nom name of the patient
 * @apiSuccess {String} prenom firstname of the patient
 * @apiSuccess {String} mail email of the patient
 * @apiSuccess {int} num_secu secu number of the patient
 * @apiSuccess {String} adresse adress of the patient
 * @apiSuccess {String} ville city of the patient
 * @apiSuccess {int} cp postal code of the patient
 * @apiSuccess {String} identifiant username of the patient
 * @apiSuccess {String} password password of the patient
 * @apiSuccess {Date} date_naissance birthdate of the patient
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
patientRouter.post('/new', function(req, res){
  var values = [req.body.nom, req.body.prenom, req.body.mail, req.body.num_secu,
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

/**
 * @api {put} /new create a patient
 * @apiName new
 * @apiGroup patient
 *
 * @apiSuccess {int} id id of the patient
 * @apiSuccess {String} nom name of the patient
 * @apiSuccess {String} prenom firstname of the patient
 * @apiSuccess {String} mail email of the patient
 * @apiSuccess {int} num_secu secu number of the patient
 * @apiSuccess {String} adresse adress of the patient
 * @apiSuccess {String} ville city of the patient
 * @apiSuccess {int} cp postal code of the patient
 * @apiSuccess {String} identifiant username of the patient
 * @apiSuccess {String} password password of the patient
 * @apiSuccess {Date} date_naissance birthdate of the patient
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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
  else{
      res.json("parameter is not an integer").status(500).end();
  }
});

/**
 * @api {delete} /:id delete an patient
 * @apiName deleteById
 * @apiGroup patient
 *
 * @apiParam {int} id patient id
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
  else{
      res.json("parameter is not an integer").status(500).end();
  }
});

module.exports = patientRouter;
