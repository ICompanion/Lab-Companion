const bddController = require('./bdd');

const factureController = function(){};

factureController.getAll = function(callback) {
  bddController.start();
  bddController.executeQuery('select * from facture', '', function(data){
    bddController.stop();
	   callback(data);
  });
};

factureController.getById = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from facture where id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

factureController.getByPatientId = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from facture where patient_id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

factureController.new = function(values, callback) {
  bddController.start();
  bddController.executeQuery('insert into facture(montant, date_creation, acquitte, adresse_facturation, visite_id, patient_id, analyse_id) values($1, $2, $3, $4, $5, $6, $7)',
                              values, function(result, state){
    bddController.stop();
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

  bddController.start();
  bddController.executeQuery(text, values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

factureController.deleteById = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from facture where id = $1', [values],
                              function(result, state){
    bddController.stop();
    callback(state);
  });
};

module.exports = factureController;
