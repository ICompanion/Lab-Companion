const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const categorieController = controllers.categorie;

/**
 *
 * This is the category routes file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */

const categorieRouter = express.Router();
categorieRouter.use(bodyParser.json());

/**
 * @api {get} /all get all analysis
 * @apiName getAll
 * @apiGroup category
 *
 * @apiSuccess {int} id id of the category
 * @apiSuccess {String} nom name of the category
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":1,"nom":"Hematocytologie"},{"id":2,"nom":"Biochimie Generale"},{"id":3,"nom":"Serologie"},
 * {"id":4,"nom":"Marqueurs Tumoraux"},{"id":5,"nom":"Test"},{"id":90,"nom":"Hematocytologie"},
 * {"id":91,"nom":"Biochimie Generale"},{"id":92,"nom":"Serologie"},{"id":93,"nom":"Marqueurs Tumoraux"},
 * {"id":94,"nom":"Biochimie Generale"},{"id":26,"nom":"Hematocytologie"},{"id":27,"nom":"Biochimie Generale"},
 * {"id":28,"nom":"Serologie"},{"id":29,"nom":"Marqueurs Tumoraux"}]"
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
categorieRouter.get('/all', function(req, res){
  categorieController.getAll(function(data, state){
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
 * @api {get} /:id get an category by its it
 * @apiName getById
 * @apiGroup category
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
categorieRouter.get('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    categorieController.getById(req.params.id,function(data, state){
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
 * @api {post} /new create an category
 * @apiName new
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
categorieRouter.post('/new', function(req, res){
  var values = [req.body.nom];

  categorieController.new(values, function(state){
    if(state === true)
  {
    res.json(state).status(200).end();
    return;
  }
  res.status(500).end();
  });
});

/**
 * @api {put} /new update an category
 * @apiName update
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
categorieRouter.put('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    var values = []
    var columns = []

    for(var key in req.body){
      values.push(req.body[key]);
      columns.push(key);
    }
    categorieController.update(columns, values, req.params.id, function(state){
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
 * @api {delete} /:id delete an category
 * @apiName deleteById
 * @apiGroup category
 *
 * @apiParam {int} id category id
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
categorieRouter.delete('/:id', function(req, res){
  if(Number.parseInt(req.params.id))
  {
    categorieController.deleteById(req.params.id, function(state){
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

module.exports = categorieRouter;
