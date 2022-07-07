class value<X> {
    private avalue: X|undefined;
    constructor(private name:string) {
    }
    public setValue(myValue:X) {
        this.avalue=myValue;
    }
    public getValue() : X|undefined {
        return this.avalue;
    }
    public toString():string {
        return `${this.name}:${this.avalue}`;
    }
}
let myValue=new value<number>("aNumber");
myValue.setValue(2);
console.log(myValue.toString());
aNumber:2
