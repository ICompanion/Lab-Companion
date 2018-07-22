const express = require('express');
const authenticate = express.Router();
const controllers = require('../controllers');
const authenticateController = controllers.authenticate;

/**
 *
 * This is the authenticate routes file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */

/**
 * @api {get} /admin/:name/:password Connect user
 * @apiName connect
 * @apiGroup Authentication
 *
 * @apiSuccess {boolean} success Success of connection
 * @apiSuccess {String} message Connection message
 * @apiSuccess {String} token Generated token
 *
 * @apiSuccessExample Success-Response:
 *    {
 *      "success": true,
 *      "message": "Enjoy your token!",
 *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTI2MzE5NTMyfQ.S2bxQPO1Ku9HBL24G-mjixRPjfu5Dr0zIQca7If3BCQ"
 *    }
 *
 * @apiError (Error 404) UserNotFound No user found for this username
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     "Authentication failed. User not found."
 *
 * @apiError (Error 500) Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal server error
 *     false
 */
authenticate.get('/:name/:password', function(req, res){
  authenticateController.signIn([req.params.name, req.params.password], function(state, name, id){
    authenticateController.connect(req, res, state, name, id);
  });
});

/**
 * @api {get} /infos
 * @apiName infos
 * @apiGroup Authentication
 *
 * @apiSuccess {int} id
 * @apiSuccess {String} identifiant
 * @apiSuccess {String} nom
 * @apiSuccess {String} prenom
 * @apiSuccess {int} employe_type
 * @apiSuccess {String} type_contrat
 * @apiSuccess {Date} date_embauche
 * @apiSuccess {String} adresse
 * @apiSuccess {String} ville
 * @apiSuccess {int} cp
 * @apiSuccess {String} mail
 * @apiSuccess {int} num_secu
 *
 * @apiSuccessExample Success-Response:
 *"[{"id":5,"num_secu":1934457897,"nom":"Maxime","prenom":"Desanges","employe_type":2,
 * "date_embauche":"2011-09-04T22:00:00.000Z","type_contrat":"CDI","adresse":"153 rue du Château",
 * "ville":"Boulogne-Billancourt","cp":92100,"identifiant":"mdesanges","password":"admin2",
 * "mail":"Desanges.Maxime@live.fr"}]"
 *
 */
authenticate.get('/employee/:login/:password', function(req, res){
    authenticateController.employeeConnection([req.params.login, req.params.password], function(data, state){
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
 * @api {get} /check
 * @apiName check
 * @apiGroup Authentication
 *
 * @apiSuccess {boolean} success
 *
 */
authenticate.get('/check', function(req, res) {
  authenticateController.check(req, res, function(state){
    if(state === true){
      res.json(state).status(200);
    }
  });
});

/**
 * @api {get} /infos
 * @apiName infos
 * @apiGroup Authentication
 *
 * @apiSuccess {boolean} success
 * @apiSuccessExample Success-Response:
 * "true"
 */
authenticate.get('/infos', function(req, res) {
    authenticateController.getInfos(req, res, function(state){
        if(state === true){
            res.json(state).status(200);
        }
    });
});

/**
 * @api {get} /admin/disconnect Disconnect user
 * @apiName disconnect
 * @apiGroup Authentication
 *
 * @apiSuccess {boolean} success Success of disconnection
 * @apiSuccessExample Success-Response:
 * "disconnected"
 */
authenticate.get('/disconnect', function(req, res){
  res.clearCookie('x-access-token').json("disconnected").status(200).end();
});

module.exports = authenticate;
