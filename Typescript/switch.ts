var day=0;
switch(2) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    day=31;
    break;
    
  case 4:
  case 6:
  case 9:
  case 11:
   day=30;
   break;
   
  case 2:
    // To check if it is leap year or not
   if(((2022 % 4 == 0) && !(2022 % 100 == 0))||(2022 % 400 == 0)) 
  console.log("No Of Days are 29"); 
  else 
  console.log("No Of Days are 28");
  break;
  
  default:
   console.log("invalid month");
}
