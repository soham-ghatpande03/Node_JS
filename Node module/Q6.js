var h=require('http');
var u=require('url');
var fs=require('fs');
var server=h.createServer(function(req,res){

   
	if(req.url == '/favicon.ico')
		return;
	fs.readFile('count.txt',function(err,data){
		if(!err)
		{
			var count = parseInt(data.toString());
			count++;
			fs.writeFile('count.txt',count.toString(),function(err){
				if(!err)
				{
					 res.writeHead(200,{'content-type':'text/html'});  
     					res.write("Count : "+count);
     					res.end();
				}
			});
		}
	});
	

    
});

server.listen(9000,function(){
console.log("Server started for Q6.js");
});