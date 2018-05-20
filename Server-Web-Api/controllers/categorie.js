const bddController = require('./bdd');

const categorieController = function(){};

categorieController.getAll = function(callback) {
  bddController.executeQuery('select * from categorie', '', function(result, state){
      callback(data, state);
  });
};

categorieController.getById = function(id, callback) {
  bddController.executeQuery('select * from categorie where id = $1', [id], function(result, state){
      callback(data, state);
  });
};

categorieController.new = function(values, callback) {
  bddController.executeQuery('insert into categorie(nom, description) values($1, $2);',
                              values, function(result, state){
          callback(state);
      });
};

categorieController.update = function(columns, values, id, callback) {
  var text ='update categorie set ';
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

categorieController.deleteById = function(values, callback){
  bddController.executeQuery('delete from categorie where id = $1', [values],
                              function(result, state){
          callback(state);
      });
};

module.exports = categorieController;
