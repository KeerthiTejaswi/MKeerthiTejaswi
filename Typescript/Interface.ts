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


// Using Type Aliases
type TodaysDate=number
type TodaysDay=string
type Todaysyear=number
type Today={
    date=TodaysDate,
    day=TodaysDay,
    year=TodaysYear
}

const todaysdate:TodaysDate=30
const todaysday:TodaysDay="thursday"
const todaysyear:TodaysYear=2022
const today:Today={
    date:todaysDate,
    day:todaysDay,
    year:todaysYear
};
console.log(today);
