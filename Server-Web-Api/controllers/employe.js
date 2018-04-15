const bddController = require('./bdd');

const employeController = function(){};

employeController.getAll = function(callback) {
  bddController.start();
  bddController.executeQuery('select * from employe', '', function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

employeController.getByIdentifiant = function(identifiant, callback) {
  bddController.start();
  bddController.executeQuery('select * from employe where identifiant = $1', [identifiant], function(data){
    bddController.stop();
    callback(data);
  });
};

employeController.getByName = function(name, callback) {
  bddController.start();
  bddController.executeQuery('select * from employe where nom = $1 or prenom = $1', [name], function(data){
    bddController.stop();
    callback(data);
  });
};

employeController.getById = function(id, callback) {
  bddController.start();
  bddController.executeQuery('select * from employe where id = $1', [id], function(data){
    bddController.stop();
    callback(data);
  });
};

module.exports = employeController;
