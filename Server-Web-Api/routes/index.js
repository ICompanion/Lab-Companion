const patientRouter = require('./patient');

const RouterManager = function() { };

RouterManager.attach = function(app){
  app.use('/patient' , patientRouter);
};

module.exports = RouterManager;
