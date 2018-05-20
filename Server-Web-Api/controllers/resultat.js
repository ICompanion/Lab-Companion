const bddController = require('./bdd');

const resultatController = function(){};

resultatController.getAll = function(callback) {
  bddController.executeQuery('select * from resultat', '', function(result, state){
      callback(data, state);
  });
};

resultatController.getById = function(id, callback) {
  bddController.executeQuery('select * from resultat where id = $1', [id], function(result, state){
      callback(data, state);
  });
};

resultatController.getByCategory = function(id, callback) {
  bddController.executeQuery('select * from resultat where categorie_id = $1', [id], function(result, state){
      callback(data, state);
  });
};

resultatController.new = function(values, callback) {
  bddController.executeQuery('insert into resultat(nom, description, valeur_min, valeur_max, categorie_id) values($1, $2, $3, $4, $5);',
                              values, function(result, state){
          callback(state);
      });
};

resultatController.update = function(columns, values, id, callback) {
  var text ='update resultat set ';
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

resultatController.deleteById = function(values, callback){
  bddController.executeQuery('delete from resultat where id = $1', [values],
      function(result, state){
          callback(state);
      });
};

module.exports = resultatController;
