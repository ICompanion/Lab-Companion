const bddController = require('./bdd');

/**
 *
 * This is the category controller file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
const categorieController = function(){};

/**
 * Function which execute a query to get all categories
 * @method getAll
 * @param {} callback
 * @return 
 */
categorieController.getAll = function(callback) {
  bddController.executeQuery('select * from categorie', '', function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get a category by its id
 * @method getById
 * @param {} id
 * @param {} callback
 * @return 
 */
categorieController.getById = function(id, callback) {
  bddController.executeQuery('select * from categorie where id = $1', [id], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to create a category
 * @method new
 * @param {} values
 * @param {} callback
 * @return 
 */
categorieController.new = function(values, callback) {
  bddController.executeQuery('insert into categorie(nom) values($1);', values, function(data, state){
          callback(state);
      });
};

/**
 * Function which execute a query to update a category
 * @method update
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
categorieController.update = function(columns, values, id, callback) {
  var text ='update categorie set ';
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
 * Function which execute a query to delete a category
 * @method deleteById
 * @param {} values
 * @param {} callback
 * @return 
 */
categorieController.deleteById = function(values, callback){
  bddController.executeQuery('delete from categorie where id = $1', [values],
                              function(data, state){
          callback(state);
      });
};

module.exports = categorieController;
