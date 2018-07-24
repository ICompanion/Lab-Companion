const bddController = require('./bdd');

/**
 *
 * This is the studies controller file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
const etudeController = function(){};

/**
 * Function which execute a query to get all studies from view
 * @method getAll
 * @param {} callback
 * @return 
 */
etudeController.getAll = function(callback) {
    bddController.executeQuery('select distinct code_etude, nom_etude, date, description_etude from etudes_reponses', '', function(data, state){
        callback(data, state);
    });
};

etudeController.getMaxId = function(callback) {
    bddController.executeQuery('select max(id) as id from etude', '', function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get all studies from table
 * @method getAllStudies
 * @param {} callback
 * @return 
 */
etudeController.getAllStudies = function(callback) {
    bddController.executeQuery('select distinct code_etude, id, nom, date, description, employe_id from etude', '', function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get a study by its code
 * @method getByCode
 * @param {} code
 * @param {} callback
 * @return 
 */
etudeController.getByCode = function(code, callback) {
    bddController.executeQuery('select * from study_detail where code_etude = $1', [code], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to count study's questions
 * @method countByCode
 * @param {} code
 * @param {} callback
 * @return 
 */
etudeController.countByCode = function(code, callback) {
    bddController.executeQuery('select count(distinct id_question) from questions where code_etude = $1', [code], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get study's participating patients
 * @method getParticipatingPatient
 * @param {} code
 * @param {} callback
 * @return 
 */
etudeController.getParticipatingPatient = function(code, callback) {
    bddController.executeQuery('select * from participations where identifiant = $1', [code], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get the number of answer for the study
 * @method getNbAnswers
 * @param {} codeEtude
 * @param {} questionId
 * @param {} reponseId
 * @param {} callback
 * @return 
 */
etudeController.getNbAnswers = function(codeEtude, questionId, reponseId, callback ) {
    bddController.executeQuery('select count(*) as nbReponses from reponses where etude_id = $1 and question_id = $2 and proposition_id = $3', [codeEtude, questionId, reponseId], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to the number of participations thant answered to a study
 * @method getNbParticipations
 * @param {} codeEtude
 * @param {} callback
 * @return 
 */
etudeController.getNbParticipations = function(codeEtude, callback ) {
    bddController.executeQuery('select count(*) as nbParticipations from participation where etude_id = $1 and participation_statut = true;', [codeEtude], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get an employe's study
 * @method getByEmployeId
 * @param {} id
 * @param {} callback
 * @return 
 */
etudeController.getByEmployeId = function(id, callback) {
    bddController.executeQuery('select * from etude where employe_id = $1', [id], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get all patient participations
 * @method getByPatientId
 * @param {} code
 * @param {} callback
 * @return 
 */
etudeController.getByPatientId = function(code, callback) {
    bddController.executeQuery('select * from participations where identifiant = $1', [code], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get question's proposals
 * @method getAnswers
 * @param {} code
 * @param {} callback
 * @return 
 */
etudeController.getAnswers = function(code, callback) {
    bddController.executeQuery('select * from propositions where id_question = $1', [code], function(data, state){
        callback(data, state);
    });
};
/**
 * Function which execute a query to get all question for a study
 * @method getQuestions
 * @param {} code
 * @param {} callback
 * @return 
 */
etudeController.getQuestions = function(code, callback) {
    bddController.executeQuery('select * from questions where code_etude = $1', [code], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get all answers for a study
 * @method getAllAnswers
 * @param {} callback
 * @return 
 */
etudeController.getAllAnswers = function(callback) {
    bddController.executeQuery('select code_etude, question, reponse, nbr_reponses from reponses', '', function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to create a study
 * @method new
 * @param {} values
 * @param {} callback
 * @return 
 */
etudeController.new = function(values, callback) {
    bddController.executeQuery('insert into public.etude(code_etude, nom, date, description, employe_id) values($1, $2, $3, $4, $5)',
        values, function(data, state){
                    callback(state);
                });
};

/**
 * Function which execute a query add a question to a study
 * @method addQuestion
 * @param {} values
 * @param {} callback
 * @return 
 */
etudeController.addQuestion = function(values, callback) {
    bddController.executeQuery('insert into public.etude_question(etude_id, question_id) values($1, $2)',
        values, function(data, state){
            callback(state);
        });
};

/**
 * Function which execute a query to add an answer to a question of a study
 * @method addAnswer
 * @param {} values
 * @param {} callback
 * @return 
 */
etudeController.addAnswer = function(values, callback) {
    console.log('insert into public.reponses(etude_id, proposition_id, question_id) values($1, $2, $3)',values);
    bddController.executeQuery('insert into public.reponses(etude_id, proposition_id, question_id) values($1, $2, $3)',
        values, function(data, state){
            callback(state);
        });
};

/**
 * Function which execute a query to add a participation to a study
 * @method addParticipation
 * @param {} values
 * @param {} callback
 * @return 
 */
etudeController.addParticipation = function(values, callback) {
    bddController.executeQuery('insert into public.participation(participation_statut, patient_id, etude_id) values($1, $2, $3)',
        values, function(data, state){
            callback(state);
        });
};

/**
 * Function which execute a query to update a participation
 * @method updateParticipation
 * @param {} values
 * @param {} callback
 * @return 
 */
etudeController.updateParticipation = function(values, callback) {
    bddController.executeQuery('update public.participation set participation_statut = $1 where etude_id = $2 and patient_id = $3',
        values, function(data, state){
            callback(state);
        });
};

/**
 * Function which execute a query to update a study
 * @method update
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
etudeController.update = function(columns, values, id, callback) {
    var text ='update public.etude set ';
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
 * Function which execute a query to delete a study
 * @method deleteById
 * @param {} values
 * @param {} callback
 * @return 
 */
etudeController.deleteById = function(values, callback){
    bddController.executeQuery('delete from public.etude where id = $1; delete from etude_question where etude_id = $1; ',
        [values], function(data, state){
            callback(state);
        });
};

/**
 * Function which execute a query to remove a question from a study
 * @method removeQuestion
 * @param {} values
 * @param {} callback
 * @return 
 */
etudeController.removeQuestion = function(values, callback){
    bddController.executeQuery('delete from etude_question where etude_id = $1 and question_id = $2;',
        values, function(data, state){
            callback(state);
        });
};

module.exports = etudeController;