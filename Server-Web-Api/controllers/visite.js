const bddController = require('./bdd');

const visiteController = function(){};

visiteController.getAll = function(callback) {
  bddController.executeQuery('select * from visite', '', function(result, state){
      callback(data, state);
  });
};

visiteController.getById = function(id, callback) {
  bddController.executeQuery('select * from visite where id = $1', [id], function(result, state){
      callback(data, state);
  });
};

visiteController.getByPatientId = function(id, callback) {
  bddController.executeQuery('select * from visite where patient_id = $1', [id], function(result, state){
      callback(data, state);
  });
};

visiteController.getByDate = function(date, callback) {
  bddController.executeQuery('select * from visite where date = $1', [date], function(result, state){
      callback(data, state);
  });
};

visiteController.getByStatus = function(status, callback) {
  bddController.executeQuery('select * from visite where status = $1', [status], function(result, state){
      callback(data, state);
  });
};

visiteController.new = function(values, callback) {
  bddController.executeQuery('insert into visite(date, heure, status, patient_id, employe_id) values($1, $2, $3, $4, $5)',
                              values, function(result, state){
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

  bddController.executeQuery(text, values, function(result, state){
      callback(state);
  });
};

visiteController.deleteById = function(values, callback){
  bddController.executeQuery('delete from visite where id = $1', [values],
      function(result, state){
          callback(state);
  });
};

module.exports = visiteController;
