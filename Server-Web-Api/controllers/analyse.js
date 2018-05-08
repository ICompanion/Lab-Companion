const bddController = require('./bdd');

const analyseController = function(){};

analyseController.getAll = function(callback) {
  bddController.start();
  bddController.executeQuery('select * from analyses', '', function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

analyseController.getByCode = function(code, callback) {
  bddController.start();
  bddController.executeQuery('select * from analyses where code_analyse = $1', [code], function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

analyseController.getPatientAnalyses = function(patient_id, callback) {
  bddController.start();
  bddController.executeQuery('select * from analyses where identifiant = $1', [patient_id], function(data){
    bddController.stop();
    console.log(data);
	   callback(data);
  });
};

analyseController.new = function(values, callback) {
  bddController.start();
  bddController.executeQuery('insert into public.analyse(code_analyse, description, employe_id, patient_id, date_analyse) values($1, $2, $3, $4, $5)',
                              values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

analyseController.newResult = function(values, callback) {
  bddController.start();
  bddController.executeQuery('insert into public.resultat_analyse (valeur, analyse_id, resultat_id) values($1, $2, $3)',
                              values, function(result, state){
    bddController.stop();
    callback(state);
  });
};

analyseController.update = function(columns, values, id, callback) {
  var text ='update public.analyse set ';
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

analyseController.updateResult = function(columns, values, id, callback) {
  var text ='update public.resultat_analyse set ';
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

analyseController.deleteById = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from public.analyse where id = $1; delete from resultat_analyse where analyse_id = $1; ',
                              [values], function(result, state){
    bddController.stop();
    callback(state);
  });
};

analyseController.deleteResult = function(values, callback){
  bddController.start();
  bddController.executeQuery('delete from resultat_analyse where id = $1;',
                              [values], function(result, state){
    bddController.stop();
    callback(state);
  });
};

module.exports = analyseController;
