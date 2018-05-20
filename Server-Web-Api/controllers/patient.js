const bddController = require('./bdd');

const patientController = function(){};

patientController.getAll = function(callback) {
  bddController.executeQuery('select * from patient', '', function(result, state){
      callback(data, state);
  });
};

patientController.getByIdentifiant = function(identifiant, callback) {
  bddController.executeQuery('select * from patient where identifiant = $1', [identifiant], function(result, state){
      callback(data, state);
  });
};

patientController.getByName = function(name, callback) {
  bddController.executeQuery('select * from patient where nom = $1 or prenom = $1', [name], function(result, state){
      callback(data, state);
  });
};

patientController.getById = function(id, callback) {
  bddController.executeQuery('select * from patient where id = $1', [id], function(result, state){
      callback(data, state);
  });
};

patientController.getByCp = function(cp, callback) {
  bddController.executeQuery('select * from patient where cp = $1', [cp], function(result, state){
      callback(data, state);
  });
};

patientController.getByCity = function(ville, callback) {
  bddController.executeQuery('select * from patient where ville = $1', [ville], function(result, state){
      callback(data, state);
  });
};

patientController.new = function(values, callback) {
  bddController.executeQuery('insert into patient(nom, prenom, mail, num_secu,adresse, ville, cp, identifiant, password, date_naissance) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
                              values, function(result, state){
    callback(state);
  });
};

patientController.update = function(columns, values, id, callback) {
  var text ='update patient set ';
  var i = 1;

  for(var column of columns)
  {
    text += column + ' = $' + i +', ';
    i++;
  }
  text = text.slice(0,-2) + ' where id = ' + id;

  bddController.executeQuery(text, values, function(result, state){
    callback(state);
  });
};

patientController.deleteById = function(values, callback){
  bddController.executeQuery('delete from patient where id = $1', [values],
                              function(result, state){
    callback(state);
  });
};

module.exports = patientController;
