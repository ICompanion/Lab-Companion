const bddController = require('./bdd');

const propositionController = function(){};

propositionController.getAll = function(callback) {
    bddController.start();
    bddController.executeQuery('select * from proposition', '', function(data){
        bddController.stop();
        callback(data);
    });
};

propositionController.getById = function(id, callback) {
    bddController.start();
    bddController.executeQuery('select * from proposition where id = $1', [id], function(data){
        bddController.stop();
        callback(data);
    });
};

propositionController.new = function(values, callback) {
    bddController.start();
    bddController.executeQuery('insert into proposition(intitule) values($1);',
        values, function(result, state){
            bddController.stop();
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

    bddController.start();
    bddController.executeQuery(text, values, function(result, state){
        bddController.stop();
        callback(state);
    });
};

propositionController.deleteById = function(values, callback){
    bddController.start();
    bddController.executeQuery('delete from proposition where id = $1; delete from question_proposition where proposition_id = $1;', [values],
        function(result, state){
            bddController.stop();
            callback(state);
        });
};

module.exports = propositionController;