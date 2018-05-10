const RouterManager = function() { };

RouterManager.attach = function(app){
  app.use('/authenticate', require('./authenticate'));
  app.use('/patient' , require('./patient'));
  app.use('/employe', require('./employe'));
  app.use('/facture', require('./facture'));
  app.use('/visite', require('./visite'));
  app.use('/analyse', require('./analyse'));
  app.use('/resultat', require('./resultat'));
  app.use('/categorie', require('./categorie'));
  app.use('/etude', require('./etude'));
  app.use('/question', require('./question'));
  app.use('/proposition', require('./proposition'));
};

module.exports = RouterManager;
