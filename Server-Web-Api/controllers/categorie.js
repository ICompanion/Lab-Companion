const bddController = require('./bdd');

const categorieController = function(){};

categorieController.getAll = function(callback) {
  bddController.start();
  bddController.executeQuery('select * from categorie', '', function(data){
    bddController.stop();
	   callback(data);
  });
};

categorieController.getById = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from categorie where id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

categorieController.new = function(values, callback) {
  bddController.start();
  bddController.executeQuery('insert into categorie(nom, description) values($1, $2);',
                              values, function(result, state){
    bddController.stop();
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

  bddController.start();
  bddController.executeQuery(text, values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

categorieController.deleteById = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from categorie where id = $1', [values],
                              function(result, state){
    bddController.stop();
    callback(state);
  });
};

module.exports = categorieController;
