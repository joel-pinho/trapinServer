//VARS
var serverProperties =  {};
serverProperties.port = 8081;

var http = require('http');

var server = http.createServer(function (req, res) {
	if(req.method.toLowerCase() == 'get')  {
		console.log('GET method');

		//Handle Get Request
		processGetReq(res);

	} else if(req.method.toLowerCase() == 'post') {
		console.log('POST method');

		//Handle Post Request
		processPostReq(req, res);
	} else {
		res.setHeader('Content-Type', 'text/html');
		res.end('<strong>Resposta do server!</strong>');
	}
});


//FUNCTIONS
function processGetReq(res)  {
	res.writeHead(200, {
		'Content-Type': 'text/html',
	});
	res.write("Response from NODE server: You have a GET Request!");
	res.end;
}

server.listen(serverProperties.port, function() {
	console.log("server listening on PORT " + serverProperties.port);	
});
