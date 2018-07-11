const bddController = require('./bdd');

const etudeController = function(){};

etudeController.getAll = function(callback) {
    bddController.executeQuery('select distinct code_etude, nom_etude, date, description_etude from etudes_reponses', '', function(data, state){
        callback(data, state);
    });
};

etudeController.getByCode = function(code, callback) {
    bddController.executeQuery('select distinct code_etude, nom_etude, date, description_etude from etudes_reponses where code_etude = $1', [code], function(data, state){
        callback(data, state);
    });
};

etudeController.countByCode = function(code, callback) {
    bddController.executeQuery('select count(distinct id_question) from questions where code_etude = $1', [code], function(data, state){
        callback(data, state);
    });
};

etudeController.getParticipatingPatient = function(code, callback) {
    bddController.executeQuery('select * from participations where identifiant = $1', [code], function(data, state){
        callback(data, state);
    });
};

etudeController.getByEmployeId = function(id, callback) {
    bddController.executeQuery('select * from etude where employe_id = $1', [id], function(data, state){
        callback(data, state);
    });
};

etudeController.getByPatientId = function(code, callback) {
    bddController.executeQuery('select * from participations where identifiant = $1', [code], function(data, state){
        callback(data, state);
    });
};

etudeController.getAnswers = function(code, callback) {
    bddController.executeQuery('select * from propositions where id_question = $1', [code], function(data, state){
        callback(data, state);
    });
};
etudeController.getQuestions = function(code, callback) {
    bddController.executeQuery('select * from questions where code_etude = $1', [code], function(data, state){
        callback(data, state);
    });
};

etudeController.getAllAnswers = function(callback) {
    bddController.executeQuery('select code_etude, question, reponse, nbr_reponses from reponses', '', function(data, state){
        callback(data, state);
    });
};

etudeController.new = function(values, callback) {
    bddController.executeQuery('insert into public.etude(code_etude, nom, date, description, employe_id) values($1, $2, $3, $4, $5)',
        values, function(data, state){
                    callback(state);
                });
};

etudeController.addQuestion = function(values, callback) {
    bddController.executeQuery('insert into public.etude_question(etude_id, question_id) values($1, $2)',
        values, function(data, state){
            callback(state);
        });
};

etudeController.addAnswer = function(values, callback) {
    console.log('insert into public.reponses(etude_id, proposition_id, question_id) values($1, $2, $3)',values);
    bddController.executeQuery('insert into public.reponses(etude_id, proposition_id, question_id) values($1, $2, $3)',
        values, function(data, state){
            callback(state);
        });
};

etudeController.addParticipation = function(values, callback) {
    bddController.executeQuery('insert into public.participation(participation_statut, patient_id, etude_id) values($1, $2, $3)',
        values, function(data, state){
            callback(state);
        });
};

etudeController.updateParticipation = function(values, callback) {
    bddController.executeQuery('update public.participation set participation_statut = $1 where patient_id = $2 and etude_id = $3',
        values, function(data, state){
            callback(state);
        });
};

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

etudeController.deleteById = function(values, callback){
    bddController.executeQuery('delete from public.etude where id = $1; delete from etude_question where etude_id = $1; ',
        [values], function(data, state){
            callback(state);
        });
};

etudeController.removeQuestion = function(values, callback){
    bddController.executeQuery('delete from etude_question where etude_id = $1 and question_id = $2;',
        values, function(data, state){
            callback(state);
        });
};

module.exports = etudeController;
