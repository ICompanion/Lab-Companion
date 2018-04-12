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

patientController.connect = function(identifiant, password, callback) {
  var res;
  patientController.makeQuery('select * from patient where identifiant = $1 and password = $2', [identifiant, password]);
  bddController.start();
  bddController.executeQuery(query, function(data){
    res = data;
    bddController.stop();
    callback(res);
  });
};

module.exports = patientController;

patientController.makeQuery = function(text, values){
  query.text = text;
  query.values = values;
  return;
}
