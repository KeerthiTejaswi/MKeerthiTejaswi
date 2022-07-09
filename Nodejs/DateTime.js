var http=require('http'); // we use the require() function to include the modules
var date=require('./firstmodule'); 
http.createServer(function (req,res) { // creates a server
    res.writeHead(200,{'content-type':'text/html'});
    res.write("the date and time are:"+date.DateTime()); // write a response to the client
    res.end(); // end the response
}).listen(8080); // we will be getting output as the date and time are: Sat Jul 09 2022 14:54:15 GMT+0530(India Standard Time)
