const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const etudeController = controllers.etude;

const etudeRouter = express.Router();
etudeRouter.use(bodyParser.json());

etudeRouter.get('/all', function(req, res){
    etudeController.getAll(function(data){
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

etudeRouter.get('/patient/liste/:id', function(req, res){
    etudeController.getByPatientId(req.params.id, function(data){
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

etudeRouter.get('/:code', function(req, res){
    etudeController.getByCode(req.params.code, function(data){
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

etudeRouter.get('/:code/questions', function(req, res){
    etudeController.getQuestions(req.params.code, function(data){
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

etudeRouter.get('/:code/reponses', function(req, res){
    etudeController.getAnswers(req.params.code, function(data){
        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

etudeRouter.get('/reponses', function(req, res){
    etudeController.getAllAnswers(function(data){

        data = JSON.parse(data);
        if(data.length !== 0){
            res.json(data).status(200);
            return;
        }
        res.status(404).end();
    });
});

etudeRouter.post('/new', function(req, res){
    var values = [req.body.code_etude, req.body.nom,
        req.body.date, req.body.description, req.body.employe_id];

    etudeController.new(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

etudeRouter.post('/:code/add question/:id', function(req, res){
    var values = [req.params.code, req.params.id];

    etudeController.addQuestion(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

etudeRouter.post('/:code/participate/:id', function(req, res){
    var values = [req.body.statut, req.params.id, req.params.code];

    etudeController.addParticipation(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

etudeRouter.put('/:id', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        var values = []
        var columns = []

        for(var key in req.body){
            values.push(req.body[key]);
            columns.push(key);
        }
        etudeController.update(columns, values, req.params.id, function(state){
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

etudeRouter.delete('/:id', function(req, res){
    if(Number.parseInt(req.params.id))
    {
        etudeController.deleteById(req.params.id, function(state){
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

etudeRouter.delete('/:id/question/:id_question', function(req, res){
    if(Number.parseInt(req.params.id) && Number.parseInt(req.params.id_question) )
    {
        var values = [req.params.code, req.params.id];
        etudeController.removeQuestion(values, function(state){
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
        res.json("parameters are not both integers").status(500).end();
    }

});

module.exports = etudeRouter;