const RouterManager = function() { };

RouterManager.attach = function(app){
  app.use('/patient' , require('./patient'));
  app.use('/authenticate', require('./authenticate'));
};

module.exports = RouterManager;
