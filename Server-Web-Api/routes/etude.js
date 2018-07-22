const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const etudeController = controllers.etude;

const etudeRouter = express.Router();
etudeRouter.use(bodyParser.json());

/**
 *
 * This is the studies routes file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */

etudeRouter.get('/all', function(req, res){
    etudeController.getAll(function(data, state){
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
 * @api {get} /all get all surveys
 * @apiName getAllStudies
 * @apiGroup survey
 *
 * @apiSuccess {int} id id of the survey
 * @apiSuccess {String} code_etude code of the survey
 * @apiSuccess {String} nom name of the survey
 * @apiSuccess {Date} date date of the survey
 * @apiSuccess {String} description description of the survey
 * @apiSuccess {int} employe_id patient id which created the survey
 *
 * @apiSuccessExample Success-Response:
 *"[{"code_etude":"A58ZMP","id":6,"nom":"Enquête sur les saucisse","date":"2018-07-19T22:00:00.000Z",
 * "description":"Connaissez-vous vraiment les saucisses?","employe_id":4},
 * {"code_etude":"45KSTRZ","id":3,"nom":"Etudes du paracetamol","date":"2018-02-17T23:00:00.000Z",
 * "description":"Etudes sur les effets du paracetamol durant les 2 premières semaines de traitement","employe_id":4}]"
 *
 * @apiError (Error 404) survey No survey found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.get('/allSurvey', function(req, res){
    etudeController.getAllStudies(function(data, state){
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
 * @api {get} /patient/liste/:id get a list of the patient which participate to the study
 * @apiName getParticipatingPatient
 * @apiGroup survey
 *
 * @apiSuccess {int} id id of the participation
 * @apiSuccess {String} participation_status status of the participation
 * @apiSuccess {int} patient_id id of the patient which participate to the study
 * @apiSuccess {int} etude_id id of the study
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":1,"participation_status":false, "patient_id":1,"etude_id":3}]"
 *
 * @apiError (Error 404) participation No participation found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.get('/patient/liste/:id', function(req, res){
    etudeController.getParticipatingPatient(req.params.id, function(data, state){
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
 * @api {get} /employe/:id get employe surveys list
 * @apiName getByEmployeId
 * @apiGroup survey
 *
 * @apiSuccess {int} id id of the survey
 * @apiSuccess {String} code_etude code of the survey
 * @apiSuccess {String} nom name of the survey
 * @apiSuccess {Date} date date of the survey
 * @apiSuccess {String} description description of the survey
 * @apiSuccess {int} employe_id patient id which created the survey
 *
 * @apiSuccessExample Success-Response:
 *"[{"code_etude":"A58ZMP","id":6,"nom":"Enquête sur les saucisse","date":"2018-07-19T22:00:00.000Z",
 * "description":"Connaissez-vous vraiment les saucisses?","employe_id":4},
 * {"code_etude":"45KSTRZ","id":3,"nom":"Etudes du paracetamol","date":"2018-02-17T23:00:00.000Z",
 * "description":"Etudes sur les effets du paracetamol durant les 2 premières semaines de traitement","employe_id":4}]"
 *
 * @apiError (Error 404) survey No survey found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.get('/employe/:id', function(req, res){
    etudeController.getByEmployeId(req.params.id, function(data, state){
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
 * @api {get} /:code get a survey by its code
 * @apiName getByCode
 * @apiGroup survey
 *
 * @apiSuccess {int} id id of the survey
 * @apiSuccess {String} code_etude code of the survey
 * @apiSuccess {String} nom name of the survey
 * @apiSuccess {Date} date date of the survey
 * @apiSuccess {String} description description of the survey
 * @apiSuccess {int} employe_id patient id which created the survey
 *
 * @apiSuccessExample Success-Response:
 *"[{"code_etude":"A58ZMP","id":6,"nom":"Enquête sur les saucisse","date":"2018-07-19T22:00:00.000Z",
 * "description":"Connaissez-vous vraiment les saucisses?","employe_id":4}]"
 *
 * @apiError (Error 404) survey No survey found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.get('/:code', function(req, res){
    etudeController.getByCode(req.params.code, function(data, state){
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
 * @api {get} /:code/questions get survey's questions
 * @apiName getQuestions
 * @apiGroup survey
 *
 * @apiSuccess {int} id id of the question
 * @apiSuccess {String} intitule value of the question
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":5,"nom":"Dormez-vous beaucoup ?"}]"
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
etudeRouter.get('/:code/questions', function(req, res){
    etudeController.getQuestions(req.params.code, function(questions, state){
        if(state === false) {res.status(500).end(); return;}
        questions = JSON.parse(questions);
        if(questions.length !== 0){
            res.json(questions).status(200);
            return;
        }
        res.status(404).end();
    });
});

/**
 * @api {get} /:code/questions get survey's proposals
 * @apiName getAnswers
 * @apiGroup survey
 *
 * @apiSuccess {int} id id of the proposal
 * @apiSuccess {String} intitule value of the proposal
 * @apiSuccess {int} question_id id of the question
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":2,"nom":"Oui"}]"
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
etudeRouter.get('/:code/reponses', function(req, res){
    etudeController.getAnswers(req.params.code, function(data, state){
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
 * @api {get} /nbReponses/:etudeCode/:questionId/:reponseId get survey number of answers
 * @apiName getNbAnswers
 * @apiGroup survey
 *
 * @apiSuccess {int} number number of answers
 *
 * @apiSuccessExample Success-Response:
 *"[{10}]"
 *
 * @apiError (Error 404) survey No survey found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.get('/nbReponses/:etudeCode/:questionId/:reponseId', function(req, res ){
    etudeController.getNbAnswers(req.params.etudeCode, req.params.questionId, req.params.reponseId,  function(data, state){
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
 * @api {get} /nbReponses/:etudeCode/:questionId/:reponseId get survey number of participations
 * @apiName getNbParticipations
 * @apiGroup survey
 *
 * @apiSuccess {int} number number of participations
 *
 * @apiSuccessExample Success-Response:
 *"[{10}]"
 *
 * @apiError (Error 404) survey No survey found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.get('/nbParticipations/:etudeCode', function(req, res ){
    etudeController.getNbParticipations(req.params.etudeCode, function(data, state){
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
 * @api {get} /:code/qcount get number of surveys
 * @apiName countByCode
 * @apiGroup survey
 *
 * @apiSuccess {int} number number of surveys
 *
 * @apiSuccessExample Success-Response:
 *"[{10}]"
 *
 * @apiError (Error 404) survey No survey found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.get('/:code/qcount', function(req, res){
    etudeController.countByCode(req.params.code, function(data, state){
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
 * @api {get} /reponses get all answers number of answers for each question and proposal
 * @apiName getAllAnswers
 * @apiGroup survey
 *
 * @apiSuccess {String} code_etude study code
 * @apiSuccess {String} question study question
 * @apiSuccess {String} reponse study proposal
 * @apiSuccess {int} number number of answers
 *
 * @apiSuccessExample Success-Response:
 *"[{"code_etude":"AZDZ", "question":"Ressentez-vous des douleurs ?", "reponse":"Oui", "nbr_reponses": 10}]"
 *
 * @apiError (Error 404) survey No survey found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     false
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.get('/reponses', function(req, res){
    etudeController.getAllAnswers(function(data, state){
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
 * @api {post} /new create a study
 * @apiName new
 * @apiGroup survey
 *
 * @apiSuccess {String} code_etude code of the survey
 * @apiSuccess {String} nom name of the survey
 * @apiSuccess {Date} date date of the survey
 * @apiSuccess {String} description description of the survey
 * @apiSuccess {int} employe_id patient id which created the survey
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {post} /:id/addQuestion/:idQuestion add a question to a survey
 * @apiName addQuestion
 * @apiGroup survey
 *
 * @apiSuccess {int} id id of the survey
 * @apiSuccess {int} question_id id of the question
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.post('/:id/addQuestion/:idQuestion', function(req, res){
    var values = [req.params.id, req.params.idQuestion];

    etudeController.addQuestion(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

/**
 * @api {post} /:id/participate/:idPatient add a participation to a survey
 * @apiName addParticipation
 * @apiGroup survey
 *
 * @apiSuccess {int} id id of the survey
 * @apiSuccess {int} idPatient id of the patient
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.post('/:id/participate/:idPatient', function(req, res){
    var values = [req.body.statut, req.params.id, req.params.idPatient];

    etudeController.addParticipation(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

/**
 * @api {post} /:code/answer/add/:idq/:ida add a proposition to a question of a survey
 * @apiName addParticipation
 * @apiGroup survey
 *
 * @apiSuccess {string} code code of the survey
 * @apiSuccess {int} idq id of the question
 * @apiSuccess {int} ida id of the proposition
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.post('/:code/answer/add/:idq/:ida', function(req, res){
    var values = [req.params.code, req.params.idq, req.params.ida];

    etudeController.addAnswer(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

/**
 * @api {post} /answer/participate/:statusp/:idp/:code update a participation of a survey
 * @apiName updateParticipation
 * @apiGroup survey
 *
 * @apiSuccess {string} code code of the survey
 * @apiSuccess {int} idp id of the patient
 * @apiSuccess {int} statusp status of the participation
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
etudeRouter.post('/answer/participate/:statusp/:idp/:code', function(req, res){
    var values = [req.params.statusp, req.params.idp, req.params.code];

    etudeController.updateParticipation(values, function(state){
        if(state === true)
        {
            res.json(state).status(200).end();
            return;
        }
        res.status(500).end();
    });
});

/**
 * @api {put} /new update a study
 * @apiName update
 * @apiGroup survey
 *
 * @apiSuccess {int} id id of the survey
 * @apiSuccess {String} code_etude code of the survey
 * @apiSuccess {String} nom name of the survey
 * @apiSuccess {Date} date date of the survey
 * @apiSuccess {String} description description of the survey
 * @apiSuccess {int} employe_id patient id which created the survey
 *
 * @apiSuccessExample Success-Response:
 * "true"
 *
 * @apiError (Error 500) Server error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
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

/**
 * @api {delete} /:id delete an study
 * @apiName deleteById
 * @apiGroup survey
 *
 * @apiParam {int} id study id
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

/**
 * @api {delete} /:id remove a question from a survey
 * @apiName removeQuestion
 * @apiGroup survey
 *
 * @apiParam {int} id study id
 * @apiParam {int} id_question id of the question
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