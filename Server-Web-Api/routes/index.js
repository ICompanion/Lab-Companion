const RouterManager = function() { };

RouterManager.attach = function(app){
  app.use('/authenticate', require('./authenticate'));
  app.use('/patient' , require('./patient'));
  app.use('/employe', require('./employe'));
  app.use('/facture', require('./facture'));
  app.use('/visite', require('./visite'));
  app.use('/analyse', require('./analyse'));
};

module.exports = RouterManager;
