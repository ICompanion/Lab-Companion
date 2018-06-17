const bddController = require('./bdd');

const factureController = function(){};

factureController.getAll = function(callback) {
  bddController.executeQuery('select * from facture', '', function(data, state){
      callback(data, state);
  });
};

factureController.getById = function(id, callback) {
  bddController.executeQuery('select * from facture where id = $1', [id], function(data, state){
      callback(data, state);
  });
};

factureController.getByPatientId = function(id, callback) {
  bddController.executeQuery('select * from facture where patient_id = $1', [id], function(data, state){
      callback(data, state);
  });
};

factureController.new = function(values, callback) {
  bddController.executeQuery('insert into facture(montant, date_creation, acquitte, adresse_facturation, visite_id, patient_id, analyse_id) values($1, $2, $3, $4, $5, $6, $7)',
                              values, function(data, state){
          callback(state);
      });
};

factureController.update = function(columns, values, id, callback) {
  var text ='update facture set ';
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

factureController.deleteById = function(values, callback){
  bddController.executeQuery('delete from facture where id = $1', [values],
      function(data, state){
          callback(state);
      });
};

module.exports = factureController;
