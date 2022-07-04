// Using Arrow function 
var value=(x:number,y:number):number => {
  return x+y;
  console.log( x+y );
}
value(3,2); //returns 5
// Bitwise operators
var num1:number=20;
var num2:number=10;
var result;
result=(num1&num2);
console.log(result);
result=(num1|num2);
console.log(result);
result=(num1<<num2);
console.log(result);
result=(num1>>num2);
console.log(result);
var res:boolean=((num1>20)&&(num2<70));
console.log(res);
var res:boolean=((num1>10)||(num2<60));
console.log(res);
result/=num2;
console.log(result);
result+=num1;
console.log(result);
result*=num1;
console.log(result);
