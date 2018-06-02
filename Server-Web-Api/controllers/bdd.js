const pg = require('pg');
const config= require('../config');
const connection = config.database;
const bddController = function(){ };
var client;

var query = {
text: "",
values: undefined,
}

bddController.start = function(){
  client  = new pg.Client(connection);
  client.connect(function(err){
    if(err)
    {
      console.log("Erreur lors de la connexion: " +err);
      return;
    }
    console.log('Connecté à la base de données');
  });
};


bddController.executeQuery = function(text, values, callback){
    var state = false;

    bddController.makeQuery(text, values);
    client.query(query, function(err, res){
      if(err){
        console.log('Erreur lors de l\'execution de la requête: '+err);
        callback(state);
      }
      else {
        console.log('Requête executée');
        data = JSON.stringify(res.rows);
        state = true;
        callback(data, state);
      }

    });
};


bddController.stop = function(){
  client.end(function(){
    console.log('Déconnecté de la base de données');
  });
};


module.exports = bddController;

bddController.makeQuery = function(text, values){
    query.text = text;
    if(values != '')
    {
      query.values = values;
    }
    else {
      query.values = undefined;
    }
};
