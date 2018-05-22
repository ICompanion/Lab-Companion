const bddController = require('./bdd');

const analyseController = function(){};

analyseController.getAll = function(callback) {
  bddController.executeQuery('select * from analyses', '', function(data, state){
      callback(data, state);
  });
};

analyseController.getByCode = function(code, callback) {
  bddController.executeQuery('select * from analyses where code_analyse = $1', [code], function(data, state){
      callback(data, state);
  });
};

analyseController.getAnalyse = function(code_analyse, callback) {
  bddController.executeQuery('select * from analyses where code_analyse = $1', [code_analyse], function(data, state){
      callback(data, state);
  });
};

analyseController.getPatientAnalysesList = function(patient_id, callback) {
    bddController.executeQuery('select code_analyse, date_analyse from public.analyse where patient_id = $1', [patient_id], function(data, state){
        callback(data, state);
    });
};

analyseController.new = function(values, callback) {
  bddController.executeQuery('insert into public.analyse(code_analyse, description, employe_id, patient_id, date_analyse) values($1, $2, $3, $4, $5)',
                              values, function(data, state){
    callback(state);
  });
};

analyseController.newResult = function(values, callback) {
  bddController.executeQuery('insert into public.resultat_analyse (valeur, analyse_id, resultat_id) values($1, $2, $3)',
                              values, function(data, state){
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

  bddController.executeQuery(text, values, function(data, state){
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

  bddController.executeQuery(text, values, function(data, state){
    callback(state);
  });
};

analyseController.deleteById = function(values, callback){
  bddController.executeQuery('delete from public.analyse where id = $1; delete from resultat_analyse where analyse_id = $1; ',
                              [values], function(data, state){
    callback(state);
  });
};

analyseController.deleteResult = function(values, callback){
  bddController.executeQuery('delete from resultat_analyse where id = $1;',
                              [values], function(data, state){
    callback(state);
  });
};

module.exports = analyseController;
