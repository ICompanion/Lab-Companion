const express = require('express');
const authenticate = express.Router();
const controllers = require('../controllers');
const bddController = controllers.bdd;
const auth = require('../utils/auth');

var query = {
  text: '',
  values: []
};



authenticate.get('/:name/:password', function(req, res){
  bddController.start();
  var result;
  query.text = 'select * from admin where name = $1 and password = $2';
  query.values = [req.params.name, req.params.password];
  bddController.executeQuery(query, function(data){
    if(data === undefined)
    {
      result = false;
    }else {
      result = true;
    }

    bddController.stop();


  });
});

authenticate.get('/disconnect', function(req, res){
  res.clearCookie('x-access-token').json("disconnected").status(200).end();
});

module.exports = authenticate;
