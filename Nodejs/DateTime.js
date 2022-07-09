var http=require('http'); // we use the require() function to include the modules
var date=require('./firstmodule');
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html'});
    res.write("the date and time are:"+date.DateTime());
    res.end();
}).listen(8080); // we will be getting output as the date and time are: Sat Jul 09 2022 14:54:15 GMT+0530(India Standard Time)
