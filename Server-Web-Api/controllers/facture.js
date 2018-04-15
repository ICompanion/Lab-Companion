const bddController = require('./bdd');

const factureController = function(){};

factureController.getAll = function(callback) {
  bddController.start();
  bddController.executeQuery('select * from facture', '', function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

factureController.getById = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from facture where id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

factureController.getByPatientId = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from facture where patient_id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

module.exports = factureController;
