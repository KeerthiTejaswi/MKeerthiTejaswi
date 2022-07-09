 // require() function is used to include the modules
var http=require('http'); 
// url holds the part of url that comes after the domain name
var url=require('url');
http.createServer( function(req,res) {
  res.writeHead(200,{ 'Content-Type':
  'text/html'});
  // use the url module to turn the queryString into an object
  var a=url.parse(req.url,true).query;
  // returns the year and month from the query object
  var text=a.year+""+a.month; //year=2022 & month=July
  res.end(text);
}).listen(8080); // we will get the output as 2022 July
