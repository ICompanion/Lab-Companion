const bddController = require('./bdd');

const analyseController = function(){};

analyseController.getAll = function(callback) {
  bddController.start();
  bddController.executeQuery('select * from analyses', '', function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

analyseController.getByCode = function(code, callback) {
  bddController.start();
  bddController.executeQuery('select * from analyses where code_analyse = $1', [code], function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

analyseController.getPatientAnalyses = function(patient_id, callback) {
  bddController.start();
  bddController.executeQuery('select * from analyses where identifiant = $1', [patient_id], function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

module.exports = analyseController;
