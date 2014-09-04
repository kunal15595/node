// Including libraries

var app = require('http').createServer(handler),
	io = require('socket.io').listen(app),
	stat = require('node-static'); // for serving files

	// Start listening for mouse move events
// This will make all the files in the current folder
// accessible from the web
var fileServer = new stat.Server('./');
	console.log('ok');
// This is the port for our web server.
// you will need to go to http://localhost:8080 to see it
app.listen(8080);
console.log('ok');
// If the URL of the socket server is opened in a browser
function handler (request, response) {

	request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}
console.log('ok');
// Delete this row if you want to see debug messages
// io.set('log level', 1);

// Listen for incoming connections from clients
io.sockets.on('connection', function (socket) {
	console.log('request received ...');
	// Start listening for mouse move events
	socket.on('mousemove', function (data) {
		
		// This line sends the event (broadcasts it)
		// to everyone except the originating client.
		socket.broadcast.emit('moving', data);
	});
});