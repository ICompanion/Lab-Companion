const bddController = require('./bdd');

const employeController = function(){};

employeController.getAll = function(callback) {
  bddController.executeQuery('select * from employe', '', function(data, state){
      callback(data, state);
  });
};

employeController.getDoctors = function(callback) {
    bddController.executeQuery('select * from employe where employe_type = 1', '', function(data, state){
        callback(data, state);
    });
};

employeController.getByIdentifiant = function(identifiant, callback) {
  bddController.executeQuery('select * from employe where identifiant = $1', [identifiant], function(data, state){
      callback(data, state);
  });
};

employeController.getByName = function(name, callback) {
  bddController.executeQuery('select * from employe where nom = $1 or prenom = $1', [name], function(data, state){
      callback(data, state);
  });
};

employeController.getById = function(id, callback) {
  bddController.executeQuery('select * from employe where id = $1', [id], function(data, state){
      callback(data, state);
  });
};

employeController.new = function(values, callback) {
  bddController.executeQuery('insert into employe(num_secu, nom, prenom, employe_type, date_embauche, type_contrat, adresse, ville, cp, identifiant,  password, mail) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
                              values, function(data, state){
          callback(state);
      });
};

employeController.update = function(columns, values, id, callback) {
  var text ='update employe set ';
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

employeController.deleteById = function(values, callback){
  bddController.executeQuery('delete from employe where id = $1', [values],
                              function(data, state){
      callback(state);
  });
};

module.exports = employeController;
