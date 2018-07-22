const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const employeController = controllers.employe;

const employeRouter = express.Router();
employeRouter.use(bodyParser.json());

/**
 * This is the employee routes file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */

/**
 * @api {get} /all get all employees
 * @apiName getAll
 * @apiGroup employee
 *
 * @apiSuccess {int} id id of the employee
 * @apiSuccess {int} num_secu secu number of the employee
 * @apiSuccess {String} nom name of the employee
 * @apiSuccess {String} prenom firstname of the employee
 * @apiSuccess {int} employe-type type of the employee
 * @apiSuccess {Date} date_embauche employmentDate of the employee
 * @apiSuccess {String} type_contrat contract type of the employee
 * @apiSuccess {String} adresse adress of the employee
 * @apiSuccess {String} ville city of the employee
 * @apiSuccess {int} cp postal code of the employee
 * @apiSuccess {String} identifiant username of the employee
 * @apiSuccess {String} password password of the employee
 * @apiSuccess {String} mail email of the employee
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":5,"num_secu":1934457897,"nom":"Maxime","prenom":"Desanges","employe_type":2,
 * "date_embauche":"2011-09-04T22:00:00.000Z","type_contrat":"CDI",
 * "adresse":"153 rue du Château","ville":"Boulogne-Billancourt","cp":92100,"identifiant":"mdesanges",
 * "password":"admin2","mail":"Desanges.Maxime@live.fr"},
 * {"id":6,"num_secu":1934456297,"nom":"Jeanne","prenom":"Quetoya","employe_type":2,
 * "date_embauche":"2007-09-04T22:00:00.000Z","type_contrat":"CDI","adresse":"55 rue du fromage",
 * "ville":"Rouen","cp":76000,"identifiant":"jquetoya","password":"admin3","mail":"Quetoya.Jeanne@live.fr"},
 * {"id":13,"num_secu":1958288520,"nom":"Moineau","prenom":"Daniel","employe_type":1,
 * "date_embauche":"2012-01-13T23:00:00.000Z","type_contrat":"CDI","adresse":"5 allée des Murs",
 * "ville":"Paris","cp":75004,"identifiant":"dmoineau","password":"admin1","mail":"dmoineau@gmail.com"},
 * {"id":4,"num_secu":1934565297,"nom":"André","prenom":"Petit","employe_type":1,
 * "date_embauche":"2013-02-09T23:00:00.000Z","type_contrat":"CDI","adresse":"12 avenue du bois",
 * "ville":"Angerville-Bailleul","cp":76012,"identifiant":"apetit","password":"admin1","mail":"petit.andre@live.fr"}]"
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

/**
 * @api {get} /doctors get doctors type employee
 * @apiName getDoctors
 * @apiGroup employee
 *
 * @apiSuccess {int} id id of the employee
 * @apiSuccess {int} num_secu secu number of the employee
 * @apiSuccess {String} nom name of the employee
 * @apiSuccess {String} prenom firstname of the employee
 * @apiSuccess {int} employe-type type of the employee
 * @apiSuccess {Date} date_embauche employmentDate of the employee
 * @apiSuccess {String} type_contrat contract type of the employee
 * @apiSuccess {String} adresse adress of the employee
 * @apiSuccess {String} ville city of the employee
 * @apiSuccess {int} cp postal code of the employee
 * @apiSuccess {String} identifiant username of the employee
 * @apiSuccess {String} password password of the employee
 * @apiSuccess {String} mail email of the employee
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":5,"num_secu":1934457897,"nom":"Maxime","prenom":"Desanges","employe_type":2,
 * "date_embauche":"2011-09-04T22:00:00.000Z","type_contrat":"CDI",
 * "adresse":"153 rue du Château","ville":"Boulogne-Billancourt","cp":92100,"identifiant":"mdesanges",
 * "password":"admin2","mail":"Desanges.Maxime@live.fr"},
 * {"id":13,"num_secu":1958288520,"nom":"Moineau","prenom":"Daniel","employe_type":1,
 * "date_embauche":"2012-01-13T23:00:00.000Z","type_contrat":"CDI","adresse":"5 allée des Murs",
 * "ville":"Paris","cp":75004,"identifiant":"dmoineau","password":"admin1","mail":"dmoineau@gmail.com"},
 * {"id":4,"num_secu":1934565297,"nom":"André","prenom":"Petit","employe_type":1,
 * "date_embauche":"2013-02-09T23:00:00.000Z","type_contrat":"CDI","adresse":"12 avenue du bois",
 * "ville":"Angerville-Bailleul","cp":76012,"identifiant":"apetit","password":"admin1","mail":"petit.andre@live.fr"}]"
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
employeRouter.get('/doctors', function(req, res){
    employeController.getDoctors(function(data, state){
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
 * @api {get} /:identifiant get an employee by its username
 * @apiName getByIdentifiant
 * @apiGroup employee
 *
 * @apiSuccess {int} id id of the employee
 * @apiSuccess {int} num_secu secu number of the employee
 * @apiSuccess {String} nom name of the employee
 * @apiSuccess {String} prenom firstname of the employee
 * @apiSuccess {int} employe-type type of the employee
 * @apiSuccess {Date} date_embauche employmentDate of the employee
 * @apiSuccess {String} type_contrat contract type of the employee
 * @apiSuccess {String} adresse adress of the employee
 * @apiSuccess {String} ville city of the employee
 * @apiSuccess {int} cp postal code of the employee
 * @apiSuccess {String} identifiant username of the employee
 * @apiSuccess {String} password password of the employee
 * @apiSuccess {String} mail email of the employee
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":4,"num_secu":1934565297,"nom":"André","prenom":"Petit","employe_type":1,
 * "date_embauche":"2013-02-09T23:00:00.000Z","type_contrat":"CDI","adresse":"12 avenue du bois",
 * "ville":"Angerville-Bailleul","cp":76012,"identifiant":"apetit","password":"admin1","mail":"petit.andre@live.fr"}]"
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

/**
 * @api {get} /name/:nom get a patient by its name
 * @apiName getByName
 * @apiGroup employee
 *
 * @apiSuccess {int} id id of the employee
 * @apiSuccess {int} num_secu secu number of the employee
 * @apiSuccess {String} nom name of the employee
 * @apiSuccess {String} prenom firstname of the employee
 * @apiSuccess {int} employe-type type of the employee
 * @apiSuccess {Date} date_embauche employmentDate of the employee
 * @apiSuccess {String} type_contrat contract type of the employee
 * @apiSuccess {String} adresse adress of the employee
 * @apiSuccess {String} ville city of the employee
 * @apiSuccess {int} cp postal code of the employee
 * @apiSuccess {String} identifiant username of the employee
 * @apiSuccess {String} password password of the employee
 * @apiSuccess {String} mail email of the employee
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":4,"num_secu":1934565297,"nom":"André","prenom":"Petit","employe_type":1,
 * "date_embauche":"2013-02-09T23:00:00.000Z","type_contrat":"CDI","adresse":"12 avenue du bois",
 * "ville":"Angerville-Bailleul","cp":76012,"identifiant":"apetit","password":"admin1","mail":"petit.andre@live.fr"}]"
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

/**
 * @api {get} /id/:id get a patient by its id
 * @apiName getById
 * @apiGroup employee
 *
 * @apiSuccess {int} id id of the employee
 * @apiSuccess {int} num_secu secu number of the employee
 * @apiSuccess {String} nom name of the employee
 * @apiSuccess {String} prenom firstname of the employee
 * @apiSuccess {int} employe-type type of the employee
 * @apiSuccess {Date} date_embauche employmentDate of the employee
 * @apiSuccess {String} type_contrat contract type of the employee
 * @apiSuccess {String} adresse adress of the employee
 * @apiSuccess {String} ville city of the employee
 * @apiSuccess {int} cp postal code of the employee
 * @apiSuccess {String} identifiant username of the employee
 * @apiSuccess {String} password password of the employee
 * @apiSuccess {String} mail email of the employee
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":4,"num_secu":1934565297,"nom":"André","prenom":"Petit","employe_type":1,
 * "date_embauche":"2013-02-09T23:00:00.000Z","type_contrat":"CDI","adresse":"12 avenue du bois",
 * "ville":"Angerville-Bailleul","cp":76012,"identifiant":"apetit","password":"admin1","mail":"petit.andre@live.fr"}]"
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

/**
 * @api {post} /new create a patient
 * @apiName new
 * @apiGroup employee
 *
 * @apiSuccess {String} nom name of the employee
 * @apiSuccess {String} prenom name of the employee
 * @apiSuccess {int} employe-type type of the employee
 * @apiSuccess {Date} date_embauche employmentDate of the employee
 * @apiSuccess {String} type_contrat contract type of the employee
 * @apiSuccess {String} adresse adress of the employee
 * @apiSuccess {String} ville city of the employee
 * @apiSuccess {int} cp postal code of the employee
 * @apiSuccess {String} identifiant username of the employee
 * @apiSuccess {String} password password of the employee
 * @apiSuccess {String} mail email of the employee
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {put} /:id update a patient
 * @apiName update
 * @apiGroup employee
 *
 * @apiSuccess {int} num_secu secu number of the employee
 * @apiSuccess {String} nom id of the employee
 * @apiSuccess {String} prenom id of the employee
 * @apiSuccess {int} employe-type type of the employee
 * @apiSuccess {Date} date_embauche employmentDate of the employee
 * @apiSuccess {String} type_contrat contract type of the employee
 * @apiSuccess {String} adresse adress of the employee
 * @apiSuccess {String} ville city of the employee
 * @apiSuccess {int} cp postal code of the employee
 * @apiSuccess {String} identifiant username of the employee
 * @apiSuccess {String} password password of the employee
 * @apiSuccess {String} mail email of the employee
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {delete} /:id delete an employee
 * @apiName deleteById
 * @apiGroup employee
 *
 * @apiParam {int} id employee id
 *
 * @apiSuccess boolean *
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
