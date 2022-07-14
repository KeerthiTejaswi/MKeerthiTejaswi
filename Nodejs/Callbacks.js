// Blocking code 
// require() function is used to include modules
var fs = require('fs');
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('program ends');
/* we will be getting the output as Hello!! Hii Welcome to the Introduction to Nodejs 
and Express 
program ends
*/

// Non-Blocking code
// require() function is used to include modules
var fs = require('fs');
fs.readFile('input.txt',function(err,data) {
    if(err)
    return console.error(err);
    console.log(data.toString());
});
console.log('program ends');
/* we will be getting the output as Hello!! Hii Welcome to the Introduction to Nodejs
and Express 
*/
