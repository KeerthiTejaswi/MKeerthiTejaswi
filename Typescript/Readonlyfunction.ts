// Array
var array:number[]=[];
array.push(5);
array.push(3);
array.push(2);
console.log(array);
array.pop();
console.log(array);

// Using readonly function
class Student {
    readonly stuId:number;
    stuName:string;
 constructor(id:number,name:string) {
     this.stuId=id;
     this.stuName=name;
}
}
let stu=new Student(1,"rani");
stu.stuId=2;   // It shows a compiler error because readonly is used for stuid.so value cannot be changed.
stu.stuName="raju";
console.log(stu);

var c:string[]=[];
c.push("hi");
c.push("hello");
console.log(c);
