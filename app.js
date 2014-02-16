var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var server = require('http').createServer(app).listen(process.env.PORT || 5000);
app.configure(function(){
	app.use(express.static(__dirname + '/'));
});

var pub = __dirname + '/assets'
app.use(app.router);
app.use(express.static(pub));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.set('view options', {layout: false});