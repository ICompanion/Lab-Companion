const authenticateController = function(){ };
const bddController = require('./bdd');
const jwt = require('jsonwebtoken');
const config = require('../config');
const CookieParser = require('cookie-parser');

authenticateController.signIn = function(values, callback){
  bddController.start();
  bddController.executeQuery('select nom,identifiant from employe where employe.identifiant = $1 and employe.password = $2 union select nom,identifiant from patient where patient.identifiant = $1 and patient.password = $2', values, function(data, state){
    bddController.stop();
    data = JSON.parse(data);
    if(data.length === 0)
    {
      state = false;
      name = "none";
      id = "none";
    } else {
      name = data[0].nom;
      id = data[0].identifiant;
    }
    callback(state,name,id);
  });
};

authenticateController.connect = function(req, res, result, name, id){
  if (result === false) {
    res.json({ success: false, message: 'Authentication failed. User not found.' }).status(404).end();
  }
  else if (result === true) {
  // if user is found and password is right
  // create a token with only our given payload
  // we don't want to pass in the entire user since that has the password
    const payload = {
    admin: result
    };
    var token = jwt.sign(payload, req.app.get('secret'), {
    expiresIn: 60 // expires in 60 min
    });
    res.cookie('x-access-token', token)
    res.cookie('username', name)
    res.cookie('identifiant', id)
    .json({
      success: true,
      message: 'Enjoy your token!',
      token: token
      })
      .status(200)
      .end();
  }
};

authenticateController.check = function(req, res){
  var token = req.session.token;
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, req.app.get('secret'), function(err, decoded) {
      if (err) {
        res.json({ success: false, message: 'Failed to authenticate token.' }).status(400).end();
      }
      else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
      }
    });
  }
  else {
    // if there is no token
    // return an error
    res.json({
        success: false,
        message: 'No token provided.'
    }).status(403).end();
  }
};

module.exports = authenticateController;
