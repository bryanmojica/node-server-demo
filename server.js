// In this repo, the basic setup for a 
// Node server are already available, but oh
// no, it looks like there is some problems 
// with the code.

// Restore the functionality of this basic server.

var http = require('http');

var port = 3000;

var messages = [];

function handleRequest(request, response) {
	

	if ( request.method === 'POST' ) {
		request.body = '';
		request.on('data', function (chunk) {
			console.log('chunk is + ',chunk);
			request.body += chunk;
			console.log('req body is +', request.body);
		});
		request.on('end', function () {
			messages.push(request.body);
			console.log('current store currently holds', messages);
		});
		console.log(request.body);
		response.on('end', function () {
			if (err) {
				console.log(err);
			} else {
			}
		});
	}

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