// Update Files
// require() function is used to include modules
var fs=require('fs');
fs.appendFile('newfile1.txt','my text',function(err) {
  // append content at the end of the file
  if(err)
  throw err;
  console.log('update'); // we will be getting the output as update
});

// Replace the content of a file
var fs=require('fs');
fs.writeFile('newfile2.txt','my text',function(err) {
  // Replaces the file with a new one
  if(err)
  throw err;
  console.log('Replace'); // we will be getting output as Replace
});

// Delete Files
// require() function is used to include modules
var fs=require('fs');
fs.unlink('newfile3.txt',function(err) {
  // delete the file newfile3.txt
  if(err)
  throw err;
  console.log(' deleted the file'); // we will be getting output as deleted the file
});

// Rename Files
// require() function is used to include modules
var fs=require('fs');
fs.rename('newfile1.txt','renamefile.txt',function(err) {
  if(err) 
  throw err;
  console.log('renamed the file'); // we will be getting output as renamed the file
});
