
type objType={ name:string,age:number,email:string,gender:string};
const person:objType={
  name:"raju",
  age:20,
  gender:"male",
  email:'xyz@test.com'
};
console.log(person);

// Access Modifiers
class Girl {
    private  name:string;
public constructor(name:string){
    this.name=name;
}
public fullName():string {
    return this.name;
}
}
const girl=new Girl("rani");
console.log(girl.fullName());
