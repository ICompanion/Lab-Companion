const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const propositionController = controllers.proposition;

const propositionRouter = express.Router();
propositionRouter.use(bodyParser.json());

propositionRouter.get('/all', function(req, res){
    propositionController.getAll(function(data){
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

propositionRouter.get('/:id', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        propositionController.getById(req.params.id,function(data){
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
