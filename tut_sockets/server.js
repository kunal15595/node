// required modules
var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io');
var path = require('path');

// static variables
var port = 8001;
var status_ok = 200;
var status_not_found = 404;
var status_internal_error = 500;

// creating the server
var server = http.createServer(function (request, response) {
    console.log('request starting...');
	
	var filePath = '.' + request.url;
	if (filePath == './')
		filePath = './index.html';
		
	var extname = path.extname(filePath);
	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}
	
	fs.exists(filePath, function(exists) {
	
		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(status_internal_error);
					response.end();
				}
				else {
					response.writeHead(status_ok, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
			});
		}
		else {
			response.writeHead(status_not_found);
			response.end();
		}
	});
	
});
console.log('Server running at http://127.0.0.1:8001/');
//


server.listen(port);

// connection for i/o
var con = io.listen(server);
con.set('log level', 1);

con.sockets.on('connection', function(socket){
	
    socket.emit('message', 
    	{
    		'message': 'hell world',
    		'packet': 'this is another parcel'
    	}
	);
    socket.emit('parcel', 
    	{
    		'packet': 'this is a parcel'
    	}
	);
	socket.emit('date', {'date': new Date()});
	// setInterval(function(){
	//         socket.emit('date', {'date': new Date()});
	//     }, 1000);
	socket.on('client_data', function(data){
	    process.stdout.write(data.letter);
	});
});
