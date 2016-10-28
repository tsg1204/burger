var orm = require('../config/orm.js');

var table = "burgers";

var burger = {
	all: function (cb) {
		//console.log('\nburger.all in burger.js');

		orm.all(table, function (res) {
			//console.log('\nburger.js cb', res);
			cb(res);
		});
	},

    create: function (cols, vals, cb) {
    	//console.log('\nburger.create in burger.js');
		orm.create(table, cols, vals, function (res) {
			cb(res);
		});
	},
    update: function (objColVals, condition, cb) {
    	//console.log('\nburger.update in burger.js');
		orm.update(table, objColVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;
