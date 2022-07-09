// Read Files
// require() function is used to include the modules
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res) {
  // it opens a file on the server and returns its content
  fs.readFile('file1.html',function(err,data) {
    // fs.readFile() method is used to read files 
    res.writeHead(200, {
      'Content-Type':'text/html'
    });
    res.write(data);
    return res.end();
  });
}).listen(8080); /* we will be getting output as Hi <br> Everyone */


// Create files
// require() function is used to include the modules
var fs=require('fs');
fs.appendFile('newfile1.txt','Hii',function(err) {
  // creates a new file
  if(err)
  throw err;
  console.log('done'); // we will be getting output as done
});

// create a empty file using the open() method
var fs=require('fs');
fs.open('newfile2.txt','hlo',function(err,file) {
  // creates an empty file named newfile2.txt
  if(err)
  throw err;
  console.log('done'); // we will be getting output as done
}); 

// create a new file using the writeFile() method
var fs=require('fs');
fs.writeFile('newfile3.txt','Hello',function(err) {
  // creates a file named newfile3.txt
  if(err)
  throw err;
  console.log('done'); // we will be getting output as done
});
