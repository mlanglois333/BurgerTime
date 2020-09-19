const orm = require("../config/orm.js");

var burger = {
    all: function (burg) {
        orm.all("burgers", function (res) {
            burg(res);
        });
    },

    create: function (cols, vals, burg) {
        console.log("model");
        orm.create("burgers", cols, vals, function (res) {
            burg(res);
        });
    },

    update: function (vals, condition, burg) {
        console.log("model");
        orm.updateOrm(vals, condition, function (res) {
            burg(res);
        });
    },
    delete: function (condition, burg) {
        orm.delete("burgers", condition, function (res) {
            burg(res);
        });
    }
};


module.exports = burger