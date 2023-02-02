var h = require('http')
var ser = h.createServer(function(req,res)
{
res.writeHead(200,{'content-type':'text-html'});
res.write("<h1> Welcome to Node JS </h1>");
res.end();
});

ser.listen(9000,function(){
console.log("server started at 9000");
});