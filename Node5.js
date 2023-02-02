var http = require('http');
var url = require('url');
var fs = require('fs');

var myserver = http.createServer(function(req,res)
{
	var obj= url.parse(req.url ,true);
	//console.log(obj);
	var pname = obj.pathname;                     
	var fpath = pname.substring(1);
	fs.readFile(fpath, function(err,data){
		
		if(!err)
		{
			res.writeHead(200,{'content-type':'text/html'})
			res.write(data);
			res.end();
		}
		else
		{
			res.writeHead(200,{'content-type':'text/html'})
			res.write("<h3>Resource not Found</h3>");
			res.end();
		}
	})	;
});

myserver.listen(9000,function()
{
	console.log("Server started for NOde5")
})