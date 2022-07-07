let Tuple1:[string,boolean,number];
Tuple1=["hi",true,1];
console.log(Tuple1);
Tuple1=["hi",true,1,2]; //Not Assignable
console.log(Tuple1);

let Tuple2: readonly[number,string,boolean];
Tuple2=[4,"hello",true];
console.log(Tuple2);
Tuple2=[2,"hi",false];
console.log(Tuple2);

var tuple=[]
tuple[0]=2;
tuple[1]="hi";
console.log(tuple[0]);
console.log(tuple[1]);

var mytuple=[1,"hi","hello","welcome"];
console.log("items before push:"+mytuple.length);
mytuple.push(2);
console.log("items after push:"+mytuple.length);
console.log("items before pop: "+mytuple.length);
mytuple.pop();
console.log("items after pop:"+mytuple.length);
