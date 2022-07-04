// Concatenation of a string
var str1=new String("Hi");
var str2=new String("Everyone");
var c:string=str1.concat(str2.toString());
console.log(c);
var str3=new String("Hello");
var m:string=c.concat(str3.toString());
console.log(m);
// export 
 export class name {
  fname:string;
  lname:string;
 constructor(fname:string,lname:string) {
   this.fname=fname;
   this.lname=lname;
  }
  getFullName() {
    return this.fname+""+this.lname;
  }
}
var Name=new name("Rani","Lakshmi");
console.log(Name.getFullName());
// Length of a string
var a:string="welcome";
console.log(a.length);
// Using the charAt function
var word:string="Beautiful";
word.charAt(1);
word.charAt(6);
console.log(word.charAt(1));
console.log(word.charAt(6));

