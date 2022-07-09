var http = require('http'); // we use the require() function to include the modules
// create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hii! How are you'); // writing a response to the client and end the response
}).listen(8080); // the server object listens on port 8080
// we will be getting the output as 'Hii! How are you'.
