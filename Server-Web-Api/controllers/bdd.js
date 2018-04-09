const pg = require('pg');
//const connection = 'postgresql://lab:Adminpwd@localhost:5000/LAB';
const confBDD = require('../config');
const connection = confBDD.database;
const bddController = function(){ };
var client;


bddController.start = function(){
  client  = new pg.Client(connection);
  client.connect(function(err){
    if(err)
    {
      console.log("Erreur lors de la connexion: " +err);
      return;
    }
    console.log('Connecté à la base');
  });
};


bddController.executeQuery = function(query, callback){
  client.query(query, function(err, res){

    if(err){
      console.log('Erreur lors de l\'execution de la requête: '+err);
      return;
    }

    console.log('Requête executée');
    data = JSON.stringify(res.rows[0]);

    callback(data);
  });
};

bddController.stop = function(){
  client.end(function(){
    console.log('Déconnecté de Burger');
  });
};


module.exports = bddController;
