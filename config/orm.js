var connection = require("../config/connection.js");

var orm = {

    all: function(table, cb){
        var qu= "SELECT * FROM " + table + ";";
        connection.query(qu, function(err, result){
            if (err) {throw err};
            console.log("result")
            cb(result);
        });
    },

    create: function(table, cols, vals, burg){
        var colst = cols.toString();
        var qu = "INSERT INTO " + table + "(" + colst + ") VALUES (" + vals + ")";

        connection.query(qu, function(err, result) {
            if (err) throw err;
            burg(result);
        });
    },

    update: function(table, vals, condition, burg){
        var qu = "UPDATE " + table + " SET " + vals + " WHERE " + condition;
        connection.query(qu, function(err, result){
            if (err) throw err;
            burg(result);
        });
    },

    delete: function(table, condition, burg){
        var qu="DELETE FROM " + table + " WHERE " + condition;

        connection.query(qu, function(err, result){
            if (err) throw err;
            burg(result);
        });
    }
};


module.exports = orm;