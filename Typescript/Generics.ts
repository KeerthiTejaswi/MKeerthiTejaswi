// Generics
class StudentData<X,Y>
{
  private Id:X;
  private Name:Y;
  setData(id:X,name:Y) {
    this.Id=id;
    this.Name=name;
  }
  display() {
    console.log(`Id=${this.Id},Name=${this.Name}`);
  }
}
let s=new StudentData<number,string>();
s.setData(1,"Lakshmi");
s.display();
let st=new StudentData<number,string>();
st.setData(2,"sruthi");
st.display();
// Generics Interfaces 
interface Employee {
  name:string
  age:number
}
interface Manager extends Employee {
 Name:string
}
function setName<X extends Manager> (theInput:X) {
  console.log(`Names:${theInput.name}\n Age:${theInput.age}\n managerName:${theInput.Name}`);
}
let person:Manager={
  name:"Anandi",age:25,Name:"manager"
}
setName(person);

function example<x,y>(x1:x,y1:y):[x,y] {
  return [x1,y1];
}
console.log(example<number,number>(10,20));
console.log(example<number,string>(20,"hi"));
console.log(example<string,string>("hii","hello"));
console.log(example<number,boolean>(30,true));
