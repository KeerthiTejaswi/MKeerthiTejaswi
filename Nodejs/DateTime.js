var http=require('http');
var date=require('./firstmodule');
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html'});
    res.write("the date and time are:"+date.DateTime());
    res.end();
}).listen(8080);
