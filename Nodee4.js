var h = require('http');
var ur = require('url');

var server = h.createServer(function(req,res){
	var obj = ur.parse(req.url,true); // use .url for parsing and not the "ur" variable
	var user = obj.query.userid;
	
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1>Welcome "+user+" to Node JS</h1>");
	res.end();
	
});

server.listen(9000,function(){
	console.log("Server Started for Node4")
})
