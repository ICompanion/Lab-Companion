const Pool = require('pg-pool');
const config= require('../config');
const connection = config.database;
const bddController = function(){ };

var pool = new Pool(connection);
var query = {
text: "",
values: undefined,
}

bddController.start = function(){
  pool.connect(function(err){
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
    pool.query(query, function(err, res){
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
  pool.end(function(){
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
