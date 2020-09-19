var connection = require("../config/connection.js");

var orm = {

    all: function (table, burg) {
        var qu = "SELECT * FROM " + table + ";";
        connection.query(qu, function (err, result) {
            if (err) { throw err };

            burg(result);
        });
    },

    create: function (table, cols, vals, burg) {
        var colst = cols.toString();
        var qu = "INSERT INTO " + table + " (burger_name) VALUES ('" + vals + "') ;";

        connection.query(qu, function (err, result) {
            if (err) { throw err };
            burg(result);
        });
    },

    updateOrm: function (vals, condition, burg) {
        console.log("orm")
        var qu = "UPDATE burgers SET " + vals + " WHERE " + condition;

        connection.query(qu, function (err, result) {
            if (err) { throw err };
            burg(result);
        });
    },

    delete: function (table, condition, burg) {
        var qu = "DELETE FROM " + table + " WHERE " + condition;

        connection.query(qu, function (err, result) {
            if (err) { throw err };
            burg(result);
        });
    }
};


module.exports = orm;