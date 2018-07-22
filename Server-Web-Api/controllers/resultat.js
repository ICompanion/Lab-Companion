const bddController = require('./bdd');

/**
 *
 * This is the result controller file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
const resultatController = function(){};

/**
 * Function which execute a query to get all results
 * @method getAll
 * @param {} callback
 * @return 
 */
resultatController.getAll = function(callback) {
  bddController.executeQuery('select * from resultat', '', function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get a result by its id
 * @method getById
 * @param {} id
 * @param {} callback
 * @return 
 */
resultatController.getById = function(id, callback) {
  bddController.executeQuery('select * from resultat where id = $1', [id], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get by a category
 * @method getByCategory
 * @param {} id
 * @param {} callback
 * @return 
 */
resultatController.getByCategory = function(id, callback) {
    bddController.executeQuery('select * from resultat where categorie_id = $1', [id], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get a result category
 * @method getCategory
 * @param {} id
 * @param {} callback
 * @return 
 */
resultatController.getCategory = function(id, callback) {
    bddController.executeQuery('select categorie.id, categorie.nom from categorie join resultat as res on res.id = $1 and res.categorie_id = categorie.id', [id], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to create a result
 * @method new
 * @param {} values
 * @param {} callback
 * @return 
 */
resultatController.new = function(values, callback) {
  bddController.executeQuery('insert into resultat(nom, description, valeur_min, valeur_max, categorie_id) values($1, $2, $3, $4, $5);',
                              values, function(data, state){
          callback(state);
      });
};

/**
 * Function which execute a query to update a result
 * @method update
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
resultatController.update = function(columns, values, id, callback) {
  var text ='update resultat_analyse set ';
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
 * Function which execute a query to delete a result
 * @method deleteById
 * @param {} values
 * @param {} callback
 * @return 
 */
resultatController.deleteById = function(values, callback){
  bddController.executeQuery('delete from resultat where id = $1', [values],
      function(data, state){
          callback(state);
      });
};

module.exports = resultatController;
