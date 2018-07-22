const bddController = require('./bdd');

/**
 *
 * This is the employee controller file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
const employeController = function(){};

/**
 * Function which execute a query to get all employees
 * @method getAll
 * @param {} callback
 * @return 
 */
employeController.getAll = function(callback) {
  bddController.executeQuery('select * from employe', '', function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get all doctor's employees
 * @method getDoctors
 * @param {} callback
 * @return 
 */
employeController.getDoctors = function(callback) {
    bddController.executeQuery('select * from employe where employe_type = 1', '', function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get an employee by its username
 * @method getByIdentifiant
 * @param {} identifiant
 * @param {} callback
 * @return 
 */
employeController.getByIdentifiant = function(identifiant, callback) {
  bddController.executeQuery('select * from employe where identifiant = $1', [identifiant], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get an employe by its name
 * @method getByName
 * @param {} name
 * @param {} callback
 * @return 
 */
employeController.getByName = function(name, callback) {
  bddController.executeQuery('select * from employe where nom = $1 or prenom = $1', [name], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get an employee by its id
 * @method getById
 * @param {} id
 * @param {} callback
 * @return 
 */
employeController.getById = function(id, callback) {
  bddController.executeQuery('select * from employe where id = $1', [id], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to create an employee
 * @method new
 * @param {} values
 * @param {} callback
 * @return 
 */
employeController.new = function(values, callback) {
  bddController.executeQuery('insert into employe(num_secu, nom, prenom, employe_type, date_embauche, type_contrat, adresse, ville, cp, identifiant,  password, mail) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
                              values, function(data, state){
          callback(state);
      });
};

/**
 * Function which execute a query to update an employee
 * @method update
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
employeController.update = function(columns, values, id, callback) {
  var text ='update employe set ';
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
 * Function which execute a query to delete an employee by its id
 * @method deleteById
 * @param {} values
 * @param {} callback
 * @return 
 */
employeController.deleteById = function(values, callback){
  bddController.executeQuery('delete from employe where id = $1', [values],
                              function(data, state){
      callback(state);
  });
};

module.exports = employeController;
