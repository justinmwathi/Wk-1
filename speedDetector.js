//Code challenge 2

//Create a function called speedDetector
function speedDetector(speed){
    //create variable speedLimit which stores 70
    const speedLimit=70;
    //create variable demeritPoints and include Math.floor to eliminate decimal places by rounding down.
    const demeritPoints=Math.floor((speed-speedLimit)*0.2);
    //a condition is created that if the argument speed is greater than the speedLimit "ok" is returned.
  if(speed<=speedLimit){
    return "Ok";
   //a condition is created stating that if demeritPoints is > 12,the driver's license should be suspended. 
  }else if(demeritPoints>12){
    return "License suspended";
    //Otherwise,if demeritPoints are less than 12 and the speed is greater than the limit,the demeritPoints are printed.
  }else{
    return `Points:${demeritPoints}`;
  }
}
//invoke the function speedDetector
speedDetector(speed);