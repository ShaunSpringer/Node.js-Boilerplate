//dependencies
var express = require('express');
var app = module.exports = express.createServer();
var stylus = require("stylus");
var nib = require("nib");
var fs = require("fs");
var socket = require("socket.io");
var db = require('./app/db-connect.js');

// bootstrap our schemas/models
var schemaPath = __dirname + '/app/schemas/';
var schemaFiles = fs.readdirSync(schemaPath);
schemaFiles.forEach(function(file){
	require(schemaPath + file);
});
 
//load our config and routes
var config = require("./app/config.js")(app, express, stylus, nib, __dirname);
		
// Only listen on $ node app.js
if (!module.parent) {
  app.listen(80);
}

// bootstrap our controllers
var controllerPath = __dirname + '/app/controllers/';
var controllerFiles = fs.readdirSync(controllerPath);
controllerFiles.forEach(function(file){
	require(controllerPath + file)(app, __dirname);
});

//setup our default route
app.get('/', function(req, res){	
	res.render('index', {
	    title: 'Node.js Boilerplate'
	});		
});