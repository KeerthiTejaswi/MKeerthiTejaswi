class Person {
    age:number;
    firstName:string;
    lastName:string;
public get Age() {
    return this.age;
}
public set Age(theAge:number) {
    if(theAge<=0||theAge>=170) {
        console.log("The age is Invalid");
    }
    this.age=theAge;
}
public get FullName():string {
    return `${this.firstName} ${this.lastName}`;
    
}
}
let person=new Person();
person.Age=0;
person.firstName="rani";
console.log(person.firstName);
person.lastName="Lakshmi";
console.log(person.lastName);
console.log(person.FullName);
