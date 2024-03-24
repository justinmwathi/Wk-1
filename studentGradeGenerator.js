//Code challenge 1

//create a function that prompts a user to input student marks.
function studentGradeGenerator(marks){
    //provide a conditional and if the condition is met as set return is expected.
    if(marks>=79 && marks<=100){
        return "A";
    //marks between 60 and 79 returns B    
    }else if(marks>=60 && marks<=79){
        return "B";
    //marks between 59-49 returns C    
    }else if(marks >=50 && marks<=59){
        return "C";
    //marks between 40-49 returns D    
    }else if(marks>=40 && marks<=49){
        return "D"
    //marks less than 40 returns E    
    }else if(marks<40){
        return "E";
         
}
}
//invoke the function codeGradeGenerator
studentGradeGenerator();
