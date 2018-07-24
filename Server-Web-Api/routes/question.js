const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const questionController = controllers.question;

const questionRouter = express.Router();
questionRouter.use(bodyParser.json());

/**
 *
 * This is the question routes file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */

/**
 * @api {get} /all get all questions
 * @apiName getAll
 * @apiGroup question
 *
 * @apiSuccess {int} id id of the question
 * @apiSuccess {String} intitule value of the question
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"intitule":"Ressentez-vous des douleurs musculaires ?"},{"id":3,"intitule":"Ressentez-vous des nausées ?"}]"
 *
 * @apiError (Error 404) question No question found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
questionRouter.get('/all', function(req, res){
    questionController.getAll(function(data, state){
        if(state === false) {res.status(500).end(); return;}
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

questionRouter.get('/maxId', function(req, res){
    questionController.getMaxId(function(data, state){
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
 * @api {get} /all get a question by its id
 * @apiName getById
 * @apiGroup question
 *
 * @apiSuccess {int} id id of the question
 * @apiSuccess {String} intitule value of the question
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"intitule":"Ressentez-vous des douleurs musculaires ?"},{"id":3,"intitule":"Ressentez-vous des nausées ?"}]"
 *
 * @apiError (Error 404) question No question found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */

questionRouter.get('/maxID', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        questionController.getMaxId( [""],function(data, state){
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
 * @api {post} /:id/reponse/:idAnswer add answer to a question
 * @apiName addAnswer
 * @apiGroup question
 *
 * @apiParam {int} id value of the question
 * @apiParam {int} answer_id id of the answer
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
questionRouter.post('/:id/reponse/:idAnswer', function(req, res){
    var values = [req.params.id, req.params.idAnswer];

    questionController.addAnswer(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

/**
 * @api {post} /new create a new question
 * @apiName new
 * @apiGroup question
 *
 * @apiSuccess {String} intitule value of the question
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
questionRouter.post('/new', function(req, res){
    var values = [req.body.intitule];

    questionController.new(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

/**
 * @api {put} /:id update a question
 * @apiName update
 * @apiGroup question
 *
 * @apiSuccess {int} id id of the question
 * @apiSuccess {String} intitule value of the question
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
questionRouter.put('/:id', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        var values = []
        var columns = []

        for(var key in req.body){
            values.push(req.body[key]);
            columns.push(key);
        }
        questionController.update(columns, values, req.params.id, function(state){
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
 * @api {delete} /:id delete a question
 * @apiName deleteById
 * @apiGroup question
 *
 * @apiParam {int} id question id
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
questionRouter.delete('/:id', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        questionController.deleteById(req.params.id, function(state){
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

module.exports = questionRouter;
