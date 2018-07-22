const bddController = require('./bdd');

/**
 *
 * This is the bill controller file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
const factureController = function(){};

/**
 * Function which execute a query to get all bills
 * @method getAll
 * @param {} callback
 * @return 
 */
factureController.getAll = function(callback) {
  bddController.executeQuery('select * from facture', '', function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get a bill by its id
 * @method getById
 * @param {} id
 * @param {} callback
 * @return 
 */
factureController.getById = function(id, callback) {
  bddController.executeQuery('select * from facture where id = $1', [id], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get a bill by a patient id
 * @method getByPatientId
 * @param {} id
 * @param {} callback
 * @return 
 */
factureController.getByPatientId = function(id, callback) {
  bddController.executeQuery('select * from facture where patient_id = $1', [id], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to create a bill
 * @method new
 * @param {} values
 * @param {} callback
 * @return 
 */
factureController.new = function(values, callback) {
  bddController.executeQuery('insert into facture(montant, date_creation, acquitte, adresse_facturation, visite_id, patient_id, analyse_id) values($1, $2, $3, $4, $5, $6, $7)',
                              values, function(data, state){
          callback(state);
      });
};

/**
 * Function which execute a query to update a bill
 * @method update
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
factureController.update = function(columns, values, id, callback) {
  var text ='update facture set ';
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
 * Function which execute a query to delete a bill
 * @method deleteById
 * @param {} values
 * @param {} callback
 * @return 
 */
factureController.deleteById = function(values, callback){
  bddController.executeQuery('delete from facture where id = $1', [values],
      function(data, state){
          callback(state);
      });
};

module.exports = factureController;
