// Using Interface for Rectangle
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

// Using Interface for Square
interface Square {
    side:number
}
interface mySquare extends Square {
    color:string
}
const MySquare:mySquare={
    side:20,
    color:"green"
};
console.log(MySquare);

// Using Interface for Triangle
interface Triangle {
    base:number,
    height:number
}
interface myTriangle extends Triangle {
    color:string
}
const MyTriangle:myTriangle={
    base:10,
    height:20,
    color:"red"
};
console.log(MyTriangle);
