const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const resultatController = controllers.resultat;

const resultatRouter = express.Router();
resultatRouter.use(bodyParser.json());

/**
 *
 * This is the results routes file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */

/**
 * @api {get} /all get all results
 * @apiName getAll
 * @apiGroup result
 *
 * @apiSuccess {int} id id of the result
 * @apiSuccess {String} nom name of the result
 * @apiSuccess {float} valeur_min minimum value of the result
 * @apiSuccess {float} valeur_max maximum value of the result
 * @apiSuccess {int} categorie_id id of the result's category
 * @apiSuccess {String} unit unit type of the result
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":25,"nom":"Proteines","valeur_min":"0.25","valeur_max":"0.50","categorie_id":2,"unit":"mg/L"},
 * {"id":26,"nom":"Lipides","valeur_min":"0.25","valeur_max":"0.50","categorie_id":2,"unit":"mg/L"},
 * {"id":27,"nom":"Glucides","valeur_min":"0.25","valeur_max":"0.50","categorie_id":2,"unit":"mg/L"}]"
 *
 * @apiError (Error 404) result No result found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
resultatRouter.get('/all', function(req, res){
  resultatController.getAll(function(data, state){
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
 * @api {get} /:id get a result by its id
 * @apiName getById
 * @apiGroup result
 *
 * @apiSuccess {int} id id of the result
 * @apiSuccess {String} nom name of the result
 * @apiSuccess {float} valeur_min minimum value of the result
 * @apiSuccess {float} valeur_max maximum value of the result
 * @apiSuccess {int} categorie_id id of the result's category
 * @apiSuccess {String} unit unit type of the result
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":25,"nom":"Proteines","valeur_min":"0.25","valeur_max":"0.50","categorie_id":2,"unit":"mg/L"}]"
 *
 * @apiError (Error 404) result No result found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
resultatRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    resultatController.getById(req.params.id,function(data, state){
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
 * @api {get} /categorie/:id get results of a category
 * @apiName getByCategory
 * @apiGroup result
 *
 * @apiSuccess {int} id id of the result
 * @apiSuccess {String} nom name of the result
 * @apiSuccess {float} valeur_min minimum value of the result
 * @apiSuccess {float} valeur_max maximum value of the result
 * @apiSuccess {int} categorie_id id of the result's category
 * @apiSuccess {String} unit unit type of the result
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":25,"nom":"Proteines","valeur_min":"0.25","valeur_max":"0.50","categorie_id":2,"unit":"mg/L"},
 * {"id":26,"nom":"Lipides","valeur_min":"0.25","valeur_max":"0.50","categorie_id":2,"unit":"mg/L"},
 * {"id":27,"nom":"Glucides","valeur_min":"0.25","valeur_max":"0.50","categorie_id":2,"unit":"mg/L"}]"
 *
 * @apiError (Error 404) result No result found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
resultatRouter.get('/categorie/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    resultatController.getByCategory(req.params.id, function(data, state){
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
 * @api {get} /:id/categorie get a result's category
 * @apiName getCategory
 * @apiGroup result
 *
 * @apiSuccess {int} id id of the category
 * @apiSuccess {String} nom name of the category
 *
 * @apiSuccessExample Success-Response:
 * "[{"id":1,"nom":"Hematocytologie"}]"
 *
 * @apiError (Error 404) category No category found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
resultatRouter.get('/:id/categorie', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        resultatController.getCategory(req.params.id, function(data, state){
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
 * @api {post} /new create a result
 * @apiName new
 * @apiGroup result
 *
 * @apiSuccess {String} nom name of the result
 * @apiSuccess {float} valeur_min minimum value of the result
 * @apiSuccess {float} valeur_max maximum value of the result
 * @apiSuccess {int} categorie_id id of the result's category
 * @apiSuccess {String} unit unit type of the result
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
resultatRouter.post('/new', function(req, res){
  var values = [req.body.nom, req.body.unit, req.body.valeur_min,
                req.body.valeur_max, req.body.categorie_id];

  resultatController.new(values, function(state){
    if(state === true)
  {
    res.json(state).status(200).end();
    return;
  }
  res.status(500).end();
  });
});

/**
 * @api {put} /:id get results of a category
 * @apiName update
 * @apiGroup result
 *
 * @apiSuccess {int} id id of the result
 * @apiSuccess {String} nom name of the result
 * @apiSuccess {float} valeur_min minimum value of the result
 * @apiSuccess {float} valeur_max maximum value of the result
 * @apiSuccess {int} categorie_id id of the result's category
 * @apiSuccess {String} unit unit type of the result
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
resultatRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    resultatController.update(columns, values, req.params.id, function(state){
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
 * @api {delete} /:id delete an result
 * @apiName deleteById
 * @apiGroup result
 *
 * @apiParam {int} id result id
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
resultatRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    resultatController.deleteById(req.params.id, function(state){
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

module.exports = resultatRouter;
