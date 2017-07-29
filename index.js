var app = require('http');

server = app.createServer();

server.on('request',function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.end("hello world");
});

server.listen(3000);