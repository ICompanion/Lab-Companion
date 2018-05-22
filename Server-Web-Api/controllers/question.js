const bddController = require('./bdd');

const questionController = function(){};

questionController.getAll = function(callback) {
    bddController.executeQuery('select * from question', '', function(data, state){
        callback(data, state);
    });
};

questionController.getById = function(id, callback) {
    bddController.executeQuery('select * from question where id = $1', [id], function(data, state){
        callback(data, state);
    });
};

questionController.addAnswer = function(values, callback) {
    bddController.executeQuery('insert into public.question_proposition(question_id, proposition_id) values($1, $2)',
        values, function(data, state){
            callback(state);
        });
};

questionController.new = function(values, callback) {
    bddController.executeQuery('insert into question(intitule) values($1);',
        values, function(data, state){
            callback(state);
        });
};

questionController.update = function(columns, values, id, callback) {
    var text ='update question set ';
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

questionController.deleteById = function(values, callback){
    bddController.executeQuery('delete from question where id = $1; delete from question_proposition where question_id = $1; delete from etude_question where question_id = $1;', [values],
        function(data, state){
            callback(state);
        });
};

questionController.removeAnswer = function(values, callback){
    bddController.executeQuery('delete from question_proposition where question_id = $1 and proposition_id = $2;', values,
        function(data, state){
            callback(state);
        });
};

module.exports = questionController;