/*
Handel http request as per url 
*/

var http = require('http'); // Import Node.js core module
var server = http.createServer(function (req, res) {   //create web server
		
	if(req.url=="/"){
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write("<h1>Welcome Home Page</h1>")
		res.end();
	}
	else if(req.url=="/about"){
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write("<h1>Welcome About Page</h1>")
		res.end();
	}
	else if(req.url=="/blog"){
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write("<h1>Welcome blog Page</h1>")
		res.end();
	}
	else if(req.url=="/contact"){
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write("<h1>Welcome contact Page</h1>")
		res.end();
	}
	else{
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write("<h1>404</h1>")
		res.end();
	}
	
});
server.listen(5000); //6 - listen for any incoming requests
