
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var burger = require('../models/burger.js');

router.get('/', function(req,res) {
	console.log('\nroot route, burgers_controller.js');
     res.redirect('/burgers');
});

router.get('/burgers', function(req,res) {
	burger.all(function(data){
		console.log('\nburgers_controller.js cb');
		var hbsObject = { burgers: data };
		//console.log(hbsObject);
		console.log("\nhandlebars object (burgers:data) hbsObject\n", hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req,res) {
	burger.create(['burger_name', 'devoured'], [req.body.burger_name, false], function(data){
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;