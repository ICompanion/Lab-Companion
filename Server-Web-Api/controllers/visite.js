const bddController = require('./bdd');

const visiteController = function(){};

visiteController.getAll = function(callback) {
  bddController.start();
  bddController.executeQuery('select * from visite', '', function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

visiteController.getById = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from visite where id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

visiteController.getByPatientId = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from visite where patient_id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

visiteController.getByDate = function(date, callback) {
  bddController.start();
  bddController.executeQuery('select * from visite where date = $1', [date], function(data){
    bddController.stop();
    callback(data);
  });
};

visiteController.getByStatus = function(status, callback) {
  bddController.start();
  bddController.executeQuery('select * from visite where status = $1', [status], function(data){
    bddController.stop();
    callback(data);
  });
};

module.exports = visiteController;
