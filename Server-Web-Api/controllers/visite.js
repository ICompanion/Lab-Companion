const bddController = require('./bdd');

const visiteController = function(){};

visiteController.getAll = function(callback) {
  bddController.start();
  bddController.executeQuery('select * from visite', '', function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

visiteController.getById = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from visite where id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

visiteController.getByPatientId = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from visite where patient_id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

visiteController.getByDate = function(date, callback) {
  bddController.start();
  bddController.executeQuery('select * from visite where date = $1', [date], function(data){
    bddController.stop();
    callback(data);
  });
};

visiteController.getByStatus = function(status, callback) {
  bddController.start();
  bddController.executeQuery('select * from visite where status = $1', [status], function(data){
    bddController.stop();
    callback(data);
  });
};

visiteController.new = function(values, callback) {
  bddController.start();
  bddController.executeQuery('insert into visite(date, heure, status, patient_id, employe_id) values($1, $2, $3, $4, $5)',
                              values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

visiteController.update = function(columns, values, id, callback) {
  var text ='update visite set ';
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

visiteController.deleteById = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from visite where id = $1', [values],
                              function(result, state){
    bddController.stop();
    callback(state);
  });
};

module.exports = visiteController;
