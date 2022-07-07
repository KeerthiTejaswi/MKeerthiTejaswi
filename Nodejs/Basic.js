var http = require('http');
// create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hii! How are you');
    // writing a response to the client and end the response
}).listen(8080); // the server object listens on port 8080
