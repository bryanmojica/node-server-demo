// In this repo, the basic setup for a 
// Node server are already available, but oh
// no, it looks like there is some problems 
// with the code.

// Restore the functionality of this basic server.

var http = require('http');

var port = 3000;

function handleRequest(request, response) {
	response.end('Ahhhh yes, we are live and listening.');
};

var server = http.createServer(handleRequest);

/*var server = http.createServer(function (response, request) {
	if (request.method === 'GET') {
		response.writeHead(200, 'OK');
		var data = 'Hello, World!';
		response.end(data);
	} else {
		response.writeHead(404, 'Sorry, I only accept GET requests!');
		response.end();
	}
});*/
console.log('Listening on http://localhost:/' + ':' + port);

server.listen(port);