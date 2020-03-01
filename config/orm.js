// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var connection = require("./connection.js");

var orm = {
    selectAll: function(table){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, res) {
            console.table(res);
        });
    }, 
    insertOne: function(table, col, val){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function(err, res) {
            if (err) throw err; 
        })
    },
    updateOne: function(column, columnName, id){
        var queryString = "UPDATE burgers SET ?? = ? WHERE id = ?";
        connection.query(queryString, [column, columnName, id], function(err, res) {
            if (err) throw err; 
        })
    }
};

module.exports = orm;
