const bddController = require('./bdd');

const propositionController = function(){};

propositionController.getAll = function(callback) {
    bddController.executeQuery('select * from proposition', '', function(data, state){
        callback(data, state);
    });
};

propositionController.getById = function(id, callback) {
    bddController.executeQuery('select * from proposition where id = $1', [id], function(data, state){
        callback(data, state);
    });
};

propositionController.new = function(values, callback) {
    bddController.executeQuery('insert into proposition(intitule) values($1);',
        values, function(data, state){
            callback(state);
        });
};

propositionController.update = function(columns, values, id, callback) {
    var text ='update proposition set ';
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

propositionController.deleteById = function(values, callback){
    bddController.executeQuery('delete from proposition where id = $1; delete from question_proposition where proposition_id = $1;', [values],
        function(data, state){
            callback(state);
        });
};

module.exports = propositionController;