const bddController = require('./bdd');

/**
 *
 * This is the propositions controller file.
 *
 * @author Lamy Grégoire, Dubreucq Thibaud, Vilalard Mickaël
 * @version 1.0
 */
const propositionController = function(){};

/**
 * Function which execute a query to get all propositions
 * @method getAll
 * @param {} callback
 * @return 
 */
propositionController.getAll = function(callback) {
    bddController.executeQuery('select * from proposition', '', function(data, state){
        callback(data, state);
    });
};

/**
 *  Function which execute a query to get a proposition by its id
 * @method getById
 * @param {} id
 * @param {} callback
 * @return 
 */
propositionController.getById = function(id, callback) {
    bddController.executeQuery('select * from proposition where id = $1', [id], function(data, state){
        callback(data, state);
    });
};

/**
 *  Function which execute a query to create a proposition
 * @method new
 * @param {} values
 * @param {} callback
 * @return 
 */
propositionController.new = function(values, callback) {
    bddController.executeQuery('insert into proposition(intitule) values($1);',
        values, function(data, state){
            callback(state);
        });
};

/**
 *  Function which execute a query to update a proposition
 * @method update
 * @param {} columns
 * @param {} values
 * @param {} id
 * @param {} callback
 * @return 
 */
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

/**
 *  Function which execute a query to delete a proposition
 * @method deleteById
 * @param {} values
 * @param {} callback
 * @return 
 */
propositionController.deleteById = function(values, callback){
    bddController.executeQuery('delete from proposition where id = $1; delete from question_proposition where proposition_id = $1;', [values],
        function(data, state){
            callback(state);
        });
};

module.exports = propositionController;