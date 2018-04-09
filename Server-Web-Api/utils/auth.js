const auth = function() {};
const jwt = require('jsonwebtoken');
const config = require('../config');
const CookieParser = require('cookie-parser');

auth.connect = function(req, res, result){
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
    expiresIn: 60 // expires in 24 hours
    });

    res.cookie('x-access-token', token)
    .json({
      success: true,
      message: 'Enjoy your token!',
      token: token
      })
      .status(200)
      .end();
  }
};

auth.check = function(req, res){
  var token = req.cookies['x-access-token'];
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

module.exports = auth;
