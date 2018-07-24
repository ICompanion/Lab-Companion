const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const propositionController = controllers.proposition;

const propositionRouter = express.Router();
propositionRouter.use(bodyParser.json());

/**
 *
 * This is the proposal routes file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */

/**
 * @api {get} /all get all proposal
 * @apiName getAll
 * @apiGroup proposition
 *
 * @apiSuccess {int} id id of the proposal
 * @apiSuccess {String} intitule value of the proposal
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"intitule":"Non"},{"id":1,"intitule":"Oui"},{"id":3,"intitule":"peu"}]"
 *
 * @apiError (Error 404) proposal No proposal found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
propositionRouter.get('/all', function(req, res){
    propositionController.getAll(function(data, state){
        if(state === false) {res.status(500).end(); return;}
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

propositionRouter.get('/maxId', function(req, res){
    propositionController.getMaxId(function(data, state){
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
 * @api {get} /:id get a proposal byt its id
 * @apiName getById
 * @apiGroup proposition
 *
 * @apiSuccess {int} id id of the proposal
 * @apiSuccess {String} intitule value of the proposal
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"intitule":"Non"},{"id":1,"intitule":"Oui"},{"id":3,"intitule":"peu"}]"
 *
 * @apiError (Error 404) proposal No proposal found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
propositionRouter.get('/:id', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        propositionController.getById(req.params.id,function(data, state){
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
 * @api {post} /new create a new proposal
 * @apiName new
 * @apiGroup proposition
 *
 * @apiSuccess {String} intitule value of the proposal
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
propositionRouter.post('/new', function(req, res){
    var values = [req.body.intitule];

    propositionController.new(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

/**
 * @api {put} /:id update a proposal
 * @apiName update
 * @apiGroup proposition
 *
 * @apiSuccess {int} id id of the proposal
 * @apiSuccess {String} intitule value of the proposal
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
propositionRouter.put('/:id', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        var values = []
        var columns = []

        for(var key in req.body){
            values.push(req.body[key]);
            columns.push(key);
        }
        propositionController.update(columns, values, req.params.id, function(state){
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
 * @api {delete} /:id delete a proposal
 * @apiName deleteById
 * @apiGroup proposal
 *
 * @apiParam {int} id proposal id
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
propositionRouter.delete('/:id', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        propositionController.deleteById(req.params.id, function(state){
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

module.exports = propositionRouter;
