class Girl {
    name:string;
    about() : void {
        console.log(this.name+"she is a good girl.");
    }
}
class Employee extends Girl {
    empid:number;
    age: number;
    constructor(empid : number,empname:string,age:number) {
        super();
        this.empid=empid
        this.name=empname
        this.age=age
    }
    displayEmployeeInfo():void {
        console.log("Name:"+this.name+", Empid:"+this.empid+",EmpAge:"+this.age+"less than 40")
    }
    about():void {
        console.log(this.name+" is a good employee.")
    }
    }
let employee=new Employee(01,"rakshitha",25);
employee.displayEmployeeInfo();
employee.about();
