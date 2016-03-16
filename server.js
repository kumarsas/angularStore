var express = require("express");

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var PORT = process.env.PORT || 3000;

var app = express();

//app.use(express.static(__dirname + '/public'));

app.use(express.static( __dirname + "/public"));

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
 });


app.listen( PORT, function(){
	console.log('Server Started on port '+PORT);
})
