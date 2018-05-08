const bddController = require('./bdd');

const resultatController = function(){};

resultatController.getAll = function(callback) {
  bddController.start();
  bddController.executeQuery('select * from resultat', '', function(data){
    bddController.stop();
	   callback(data);
  });
};

resultatController.getById = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from resultat where id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

resultatController.getByCategory = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from resultat where categorie_id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

resultatController.new = function(values, callback) {
  bddController.start();
  bddController.executeQuery('insert into resultat(nom, description, valeur_min, valeur_max, categorie_id) values($1, $2, $3, $4, $5);',
                              values, function(result, state){
    bddController.stop();
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

  bddController.start();
  bddController.executeQuery(text, values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

resultatController.deleteById = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from resultat where id = $1', [values],
                              function(result, state){
    bddController.stop();
    callback(state);
  });
};

module.exports = resultatController;
