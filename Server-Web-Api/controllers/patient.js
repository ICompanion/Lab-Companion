const bddController = require('./bdd');

const patientController = function(){};

var query = {
  text: "",
  values: undefined,
}

patientController.getAll = function(callback) {
  bddController.start();
  bddController.executeQuery('select * from patient', '', function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

patientController.getByIdentifiant = function(identifiant, callback) {
  bddController.start();
  bddController.executeQuery('select * from patient where identifiant = $1', [identifiant], function(data){
    bddController.stop();
    callback(data);
  });
};

patientController.getByName = function(name, callback) {
  bddController.start();
  bddController.executeQuery('select * from patient where nom = $1 or prenom = $1', [name], function(data){
    bddController.stop();
    callback(data);
  });
};

patientController.getById = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from patient where id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

patientController.getByCp = function(cp, callback) {
  bddController.start();
  bddController.executeQuery('select * from patient where cp = $1', [cp], function(data){
    bddController.stop();
    callback(data);
  });
};

patientController.getByCity = function(ville, callback) {
  bddController.start();
  bddController.executeQuery('select * from patient where ville = $1', [ville], function(data){
    bddController.stop();
    callback(data);
  });
};

module.exports = patientController;

patientController.makeQuery = function(text, values){
  query.text = text;
  query.values = values;
  return;
}
