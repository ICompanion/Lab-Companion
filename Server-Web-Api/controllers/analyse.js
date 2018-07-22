const bddController = require('./bdd');

/**
 *
 * This is the analysis controller file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
const analyseController = function(){};

/**
 * Function which execute a query to get all analysis
 * @method getAll
 * @param {} callback
 * @return 
 */
analyseController.getAll = function(callback) {
  bddController.executeQuery('select * from analyses', '', function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get an analysis by its code
 * @method getByCode
 * @param {} code
 * @param {} callback
 * @return 
 */
analyseController.getByCode = function(code, callback) {
  bddController.executeQuery('select * from analyses where code_analyse = $1', [code], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get an analysis by its id
 * @method getById
 * @param {} id
 * @param {} callback
 * @return 
 */
analyseController.getById = function(id, callback) {
    bddController.executeQuery('select * from public.analyse where id = $1', [id], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get an analysis by an employee id
 * @method getByEmploye
 * @param {} id
 * @param {} callback
 * @return 
 */
analyseController.getByEmploye = function(id, callback) {
    bddController.executeQuery('select * from public.analyse where employe_id = $1', [id], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get an analysis by its code
 * @method getAnalyse
 * @param {} code_analyse
 * @param {} callback
 * @return 
 */
analyseController.getAnalyse = function(code_analyse, callback) {
  bddController.executeQuery('select * from analyses where code_analyse = $1', [code_analyse], function(data, state){
      callback(data, state);
  });
};

/**
 * Function which execute a query to get an analysis result
 * @method getAnalyseResults
 * @param {} code_analyse
 * @param {} callback
 * @return 
 */
analyseController.getAnalyseResults = function(code_analyse, callback) {
    bddController.executeQuery('select * from resultat_analyse where analyse_id = $1', [code_analyse], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get a patient analysis list
 * @method getPatientAnalysesList
 * @param {} patient_id
 * @param {} callback
 * @return 
 */
analyseController.getPatientAnalysesList = function(patient_id, callback) {
    bddController.executeQuery('select code_analyse, date_analyse from public.analyse where patient_id = $1', [patient_id], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to add a new analysis
 * @method new
 * @param {} values
 * @param {} callback
 * @return 
 */
analyseController.new = function(values, callback) {
  bddController.executeQuery('insert into public.analyse(code_analyse, description, employe_id, patient_id, date_analyse) values($1, $2, $3, $4, $5)',
                              values, function(data, state){
    callback(state);
  });
};

/**
 * Function which execute a query to add a new analysis result
 * @method newResult
 * @param {} values
 * @param {} callback
 * @return 
 */
analyseController.newResult = function(values, callback) {
  bddController.executeQuery('insert into public.resultat_analyse (valeur, analyse_id, resultat_id) values($1, $2, $3)',
                              values, function(data, state){
    callback(state);
  });
};

/**
 * Function which execute a query to update an analysis
 * @method update
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
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

/**
 * Function which execute a query to update an analysis result
 * @method updateResult
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
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

/**
 * Function which execute a query to delete an analysis by its id
 * @method deleteById
 * @param {} values
 * @param {} callback
 * @return 
 */
analyseController.deleteById = function(values, callback){
  bddController.executeQuery('delete from public.analyse where id = $1; delete from resultat_analyse where analyse_id = $1; ',
                              [values], function(data, state){
    callback(state);
  });
};

/**
 * Function which execute a query to delete an analysis result
 * @method deleteResult
 * @param {} values
 * @param {} callback
 * @return 
 */
analyseController.deleteResult = function(values, callback){
  bddController.executeQuery('delete from resultat_analyse where id = $1;',
                              [values], function(data, state){
    callback(state);
  });
};

module.exports = analyseController;
