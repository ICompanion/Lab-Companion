const bddController = require('./bdd');

/**
 *
 * This is the patient controller file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
const patientController = function(){};

/**
 * Function which execute a query to get all patients
 * @method getAll
 * @param {} callback
 * @return 
 */
patientController.getAll = function(callback) {
  bddController.executeQuery('select * from patient', '', function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get a patient by its username
 * @method getByIdentifiant
 * @param {} identifiant
 * @param {} callback
 * @return 
 */
patientController.getByIdentifiant = function(identifiant, callback) {
  bddController.executeQuery('select * from patient where identifiant = $1', [identifiant], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get a patient by its name
 * @method getByName
 * @param {} name
 * @param {} callback
 * @return 
 */
patientController.getByName = function(name, callback) {
  bddController.executeQuery('select * from patient where nom = $1 or prenom = $1', [name], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get a patient by its id
 * @method getById
 * @param {} id
 * @param {} callback
 * @return 
 */
patientController.getById = function(id, callback) {
  bddController.executeQuery('select * from patient where id = $1', [id], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get patients by a postalCode
 * @method getByCp
 * @param {} cp
 * @param {} callback
 * @return 
 */
patientController.getByCp = function(cp, callback) {
  bddController.executeQuery('select * from patient where cp = $1', [cp], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get patient from a city
 * @method getByCity
 * @param {} ville
 * @param {} callback
 * @return 
 */
patientController.getByCity = function(ville, callback) {
  bddController.executeQuery('select * from patient where ville = $1', [ville], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to create a patient
 * @method new
 * @param {} values
 * @param {} callback
 * @return 
 */
patientController.new = function(values, callback) {
  bddController.executeQuery('insert into patient(nom, prenom, mail, num_secu,adresse, ville, cp, identifiant, password, date_naissance) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
                              values, function(data, state){
    callback(state);
  });
};

/**
 * Function which execute a query to update a patient
 * @method update
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
patientController.update = function(columns, values, id, callback) {
  var text ='update patient set ';
  var i = 1;

  for(var column of columns)
  {
    text += column + ' = $' + i +', ';
    i++;
  }
  text = text.slice(0,-2) + ' where id = ' + id;
  bddController.executeQuery(text, values, function(data, state){
    callback(state);
  });
};

/**
 * Function which execute a query to delete a patient
 * @method deleteById
 * @param {} values
 * @param {} callback
 * @return 
 */
patientController.deleteById = function(values, callback){
  bddController.executeQuery('delete from patient where id = $1', [values],
                              function(data, state){
    callback(state);
  });
};

module.exports = patientController;
