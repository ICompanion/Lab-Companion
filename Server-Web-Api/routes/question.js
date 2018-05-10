const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const questionController = controllers.question;

const questionRouter = express.Router();
questionRouter.use(bodyParser.json());

questionRouter.get('/all', function(req, res){
    questionController.getAll(function(data){
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

questionRouter.get('/:id', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        questionController.getById(req.params.id,function(data){
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

questionRouter.post('/:id/reponse/:id', function(req, res){
    var values = [req.params.code, req.params.id];

    questionController.addAnswer(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

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
