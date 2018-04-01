const bddController = require('./bdd');

const patientController = function(){};

var query = {
  text: "",
  values: undefined,
}

patientController.getAll = function(callback) {
  var res;
  patientController.makeQuery('select * from patient');
  bddController.start();
  bddController.executeQuery(query, function(data){
    res = data;
    bddController.stop();
	callback(res);
  });

  return res;
};

patientController.getByIdentifiant = function(identifiant) {
  var res;
  patientController.makeQuery('select * from patient where identifiant = $1', [identifiant])
  bddController.start();
  bddController.executeQuery(query, function(data){
    res = data;
    bddController.stop();
  });

  return res;
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
