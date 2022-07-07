// Utility Types
//Record
const NameId:Record<string,number> = {
  "pratyu":1,
  "janu":2,
  "anu":3,
  "aravind":4
};
console.log(NameId);
//Omit
interface Student {
  name:string;
  id:number;
  branch:string;
}
const abc:Omit<Student,"id"|"branch"> = {
  name:"Niki"
};
console.log(abc);
//Pick
interface person {
  name:string;
  age:number;
  profession:string;
}
const pick:Pick<person,"name"> = {
  name:"rani"
};
console.log(pick);
//Exclude
type demo=string|boolean|number
const res:Exclude<demo,boolean>="hello";
console.log(typeof res);
//Partial
interface Pair {
  x:number;
  y:number;
}
 let aPair:Partial<Pair> = {};
 aPair.x=1;
 console.log(aPair);
 //Required
 interface Employee {
   name:string;
   id:number;
   age:number;
 }
 let aEmployee:Required<Employee> = {
   name:"xyz",
   id:003,
   age:25
 };
 console.log(aEmployee);
