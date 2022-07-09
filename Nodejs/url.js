// require() function is used to include the modules
var url=require('url');
var adrress=
'http://localhost:8080/default.htm?year=2022&month=july';
// address is parsed
var a=url.parse(adrress,true);
// parse method returns an object containing url properties
console.log(a.host);
// returns 8080
console.log(a.pathname);
// returns /default
console.log(a.search);
// returns ?year=2022&month=july
// query property returns an object with all the querystring parameters as properties
var adata=a.query;
console.log(adata.month);
// returns july
