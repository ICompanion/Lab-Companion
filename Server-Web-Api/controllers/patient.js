const bddController = require('./bdd');

const patientController = function(){};

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

patientController.newPatient = function(values, callback) {
  bddController.start();
  bddController.executeQuery('insert into patient(nom, prenom, mail, num_secu,adresse, ville, cp, identifiant, password, date_naissance) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
                              values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

patientController.updatePatient = function(columns, values, id, callback) {
  var text ='update patient set ';
  var i = 1;

  for(var column of columns)
  {
    text += column + ' = $' + i +', ';
    i++;
  }
  text = text.slice(0,-2) + ' where id = ' + id;

  bddController.start();
  bddController.executeQuery(text, values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

patientController.deleteById = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from patient where id = $1', [values],
                              function(result, state){
    bddController.stop();
    callback(state);
  });
};

module.exports = patientController;
