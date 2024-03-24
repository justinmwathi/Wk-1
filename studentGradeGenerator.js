//Code challenge 1
const prompt=require('prompt-sync')()

let userInput=prompt("Please enter student's marks:")
const studentMarks=studentGradeGenerator(userInput);
console.log(`Grade:${studentMarks}`);
//create a function that prompts a user to input student marks.
function studentGradeGenerator(userInput){
    //provide a conditional and if the condition is met as set return is expected.
    if(userInput>=79 && userInput<=100){
        return "A";
    //marks between 60 and 79 returns B    
    }else if(userInput>=60 && userInput<=79){
        return "B";
    //marks between 59-49 returns C    
    }else if(userInput >=50 && userInput<=59){
        return "C";
    //marks between 40-49 returns D    
    }else if(userInput>=40 && userInput<=49){
        return "D"
    //marks less than 40 returns E    
    }else if(userInput<40){
        return "E";
         
}
}
//invoke the function codeGradeGenerator
studentGradeGenerator(userInput);
