
var express = require('express');
var http = require('http');
var app = express();

//all environments
app.set('port',3007);
app.use(express.logger('dev'));
app.use(app.router);

//dev
app.get("/S1/ping", function(req, resp) {
            		resp.send("pong");
            	});


var httpServer = http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});

httpServer.listen(app.get('port'));