// Using a Package
// require() function is used to include modules
var http = require('http');
var uc = require('upper-case');
// creating a server
http.createServer(function(req,res) {
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });
// Using upper-case module to upper case a string
// The string we have entered will be printed in uppercase letters
    res.write(uc.upperCase("hi"));
    res.end();
}).listen(8080); //  we will be getting the output as HI

// Events
// require() function is used to include modules
var fs = require('fs');
var readStream = fs.createReadStream('./file.txt');
// It writes to the console when the file is opened
readStream.on('open',function() {
    console.log('the file is opened');
}); // we will be getting the output as the file is opened if the file is opened.
