// Using Union
function printId(id: string | number) {
    console.log(`my id is ${id}`);
}
printId(245);
printId("Rollno");

// Using Enum
enum directions {
    North,
    East,
    South,
    West
}
console.log(directions.North);
console.log(directions.West);

enum directions {
    North=1,
    East,
    South,
    West
}
console.log(directions.North);
console.log(directions.West);

// Casting with as
var x:name="welcome";
var y:number=25;
var z:message="hello"
console.log((x as string).length);
console.log((y as string).length);
console.log((<string>z).length);
