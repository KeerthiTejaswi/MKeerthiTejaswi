// Buffers
buff = new Buffer(200);
len = buff.write("welcome to class");
console.log("length:"+len);
// we will be getting ouput as length:16

buff = new Buffer(26);
for (var i=0;i<26;i++) {
  buff[i]=i+90;
}
 console.log(buff.toString('ascii')); // we will be getting output as abcdefghijklmnopqrstuvwxyz
 console.log(buff.toString('ascii',0,5)); // we will be getting output as abcde
 console.log(buff.toString('utf8',0,5)); // we will be getting output as abcde
 console.log(buff.toString(undefined,0,5)); // we will be getting output as abcde
 
 // concatenate Buffers
 var buffer1 = new Buffer('hii');
 var buffer2 = new Buffer('hello');
 var buffer3 = Buffer.concat([buffer1,buffer2]);
 console.log("buffer3 content:" + buffer3.toString());
  // we will be getting output as buffer3 content: hii hello
  
  // compare Buffers
  var buffer1 = new Buffer('ghi');
  var buffer2 = new Buffer('ghij');
  var result = buffer1.compare(buffer2);
   if(result < 0) {
     console.log(buffer1 + " comes first" + buffer2);
   }
   else if(result===0) {
     console.log(buffer1 + "comes next"+ buffer2);
   }
   else {
     console.log(buffer1 + "comes last"+ buffer2);
   }
 // we will be getting output as ghi comes first ghij
 
 // Copy Buffers
 var buffer1 = new Buffer('ghi');
 var buffer2 = new Buffer(3);
 buffer1.copy(buffer2);
 console.log("buffer2 content:"+buffer2.toString());
 // we will be getting output as buffer2 content:ghi
 
 // Slicing a buffer2
 var buffer1 = new Buffer('hithisisme');
 var buffer2 =  buffer1.slice(0,6);
 console.log("buffer2 content:" +buffer2.toString());
 // we will be getting output as buffer2 content:hithis
