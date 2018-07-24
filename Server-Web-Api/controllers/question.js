const bddController = require('./bdd');

/**
 *
 * This is the question controller file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
const questionController = function(){};

/**
 * Function which execute a query to get all questions
 * @method getAll
 * @param {} callback
 * @return 
 */
questionController.getAll = function(callback) {
    bddController.executeQuery('select * from question', '', function(data, state){
        callback(data, state);
    });
};

questionController.getMaxId = function(callback) {
    bddController.executeQuery('select max(id) as id from question', '', function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to get a question by its id
 * @method getById
 * @param {} id
 * @param {} callback
 * @return 
 */
questionController.getById = function(id, callback) {
    bddController.executeQuery('select * from question where id = $1', [id], function(data, state){
        callback(data, state);
    });
};

/**
 * Function which execute a query to add an answer to a question
 * @method addAnswer
 * @param {} values
 * @param {} callback
 * @return 
 */
questionController.addAnswer = function(values, callback) {
    bddController.executeQuery('insert into public.question_proposition(question_id, proposition_id) values($1, $2)',
        values, function(data, state){
            callback(state);
        });
};

/**
 * Function which execute a query to create a question
 * @method new
 * @param {} values
 * @param {} callback
 * @return 
 */
questionController.new = function(values, callback) {
    bddController.executeQuery('insert into question(intitule) values($1);',
        values, function(data, state){
            callback(state);
        });
};

/**
 * Function which execute a query to update a question
 * @method update
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
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

/**
 * Function which execute a query to delete a question
 * @method deleteById
 * @param {} values
 * @param {} callback
 * @return 
 */
questionController.deleteById = function(values, callback){
    bddController.executeQuery('delete from question where id = $1; delete from question_proposition where question_id = $1; delete from etude_question where question_id = $1;', [values],
        function(data, state){
            callback(state);
        });
};

/**
 * Function which execute a query to remove a proposition from question
 * @method removeAnswer
 * @param {} values
 * @param {} callback
 * @return 
 */
questionController.removeAnswer = function(values, callback){
    bddController.executeQuery('delete from question_proposition where question_id = $1 and proposition_id = $2;', values,
        function(data, state){
            callback(state);
        });
};

module.exports = questionController;