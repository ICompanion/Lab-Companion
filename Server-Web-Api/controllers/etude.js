const bddController = require('./bdd');

const etudeController = function(){};

etudeController.getAll = function(callback) {
    bddController.start();
    bddController.executeQuery('select * from etude', '', function(data){
        bddController.stop();
        callback(data);
    });
};

etudeController.getByCode = function(code, callback) {
    bddController.start();
    bddController.executeQuery('select * from etude where code_etude = $1', [code], function(data){
        bddController.stop();
        callback(data);
    });
};

etudeController.getAnswers = function(code, callback) {
    bddController.start();
    bddController.executeQuery('select * from etudes_reponses where code_etude = $1', [code], function(data){
        bddController.stop();
        callback(data);
    });
};

etudeController.getAllAnswers = function(callback) {
    bddController.start();
    bddController.executeQuery('select * from etudes_reponses;', '', function(data){
        bddController.stop();
        console.log(data);
        callback(data);
    });
};

etudeController.new = function(values, callback) {
    bddController.start();
    bddController.executeQuery('insert into public.etude(code_etude, nom, date, description, employe_id) values($1, $2, $3, $4, $5)',
        values, function(result, state){
            bddController.stop();
            callback(state);
        });
};

etudeController.addQuestion = function(values, callback) {
    bddController.start();
    bddController.executeQuery('insert into public.etude_question(etude_id, question_id) values($1, $2)',
        values, function(result, state){
            bddController.stop();
            callback(state);
        });
};

etudeController.addParticipation = function(values, callback) {
    bddController.start();
    bddController.executeQuery('insert into public.participation(participation_statut, patient_id, etude_id) values($1, $2, $3)',
        values, function(result, state){
            bddController.stop();
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

    bddController.start();
    bddController.executeQuery(text, values, function(result, state){
        bddController.stop();
        callback(state);
    });
};

etudeController.deleteById = function(values, callback){
    bddController.start();
    bddController.executeQuery('delete from public.etude where id = $1; delete from etude_question where etude_id = $1; ',
        [values], function(result, state){
            bddController.stop();
            callback(state);
        });
};

etudeController.removeQuestion = function(values, callback){
    bddController.start();
    bddController.executeQuery('delete from etude_question where etude_id = $1 and question_id = $2;',
        values, function(result, state){
            bddController.stop();
            callback(state);
        });
};

module.exports = etudeController;
