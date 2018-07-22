const bddController = require('./bdd');

/**
 *
 * This is the appointment controller file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
const visiteController = function(){};

/**
 * Function which execute a query to get all appointments
 * @method getAll
 * @param {} callback
 * @return 
 */
visiteController.getAll = function(callback) {
  bddController.executeQuery('select * from visite', '', function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get an appointment by its id
 * @method getById
 * @param {} id
 * @param {} callback
 * @return 
 */
visiteController.getById = function(id, callback) {
  bddController.executeQuery('select * from visite where id = $1', [id], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get patient's appointment
 * @method getByPatientId
 * @param {} id
 * @param {} callback
 * @return 
 */
visiteController.getByPatientId = function(id, callback) {
  bddController.executeQuery('select * from visite where patient_id = $1', [id], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get appointments by creation date
 * @method getByDate
 * @param {} date
 * @param {} callback
 * @return 
 */
visiteController.getByDate = function(date, callback) {
  bddController.executeQuery('select * from visite where date = $1', [date], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get appoitments by their status
 * @method getByStatus
 * @param {} status
 * @param {} callback
 * @return 
 */
visiteController.getByStatus = function(status, callback) {
  bddController.executeQuery('select * from visite where status = $1', [status], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to create an appointment
 * @method new
 * @param {} values
 * @param {} callback
 * @return 
 */
visiteController.new = function(values, callback) {
  bddController.executeQuery('insert into visite(date, status, patient_id, employe_id) values($1, $2, $3, $4)',
                              values, function(data, state){
          callback(state);
      });
};

/**
 * Function which execute a query to update an appointment
 * @method update
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
visiteController.update = function(columns, values, id, callback) {
  var text ='update visite set ';
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
 * Function which execute a query to delete an appointment
 * @method deleteById
 * @param {} values
 * @param {} callback
 * @return 
 */
visiteController.deleteById = function(values, callback){
  bddController.executeQuery('delete from visite where id = $1', [values],
      function(data, state){
          callback(state);
  });
};

module.exports = visiteController;
