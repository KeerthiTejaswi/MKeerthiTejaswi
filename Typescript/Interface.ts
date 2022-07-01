interface Rectangle {
    height:number,
    width:number
}
interface myRectangle extends Rectangle 
{
    color:string
}
const MyRectangle:myRectangle={
    height:20,
    width:10,
    color:"blue"
};
console.log(MyRectangle);
