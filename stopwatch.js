//=============================================================================\\
//                                 Stopwatch JS                                  \\
//                              made by nullcheats                               \\
//================================================================================\\

/*  
As you can see below there is 4 variables "Tens" , "Seconds" , "Minutes" , Count
Tens is the number that the timer will update on  ( 10th of a second )
Seconds is the number of seconds passed since timer has been running
Count is the variable we will use to declare our interval ( so we can stop it in another function)
*/
let Tens = 0;
let Seconds = 0;
let Minutes = 0;
var Count = null;

/*
This function is called upon clicking "RESET"
The visual elements will be reset to 00 & so will the variables
*/
const Reset = () => {
    document.getElementById("Minutes").innerHTML = "00";
    document.getElementById("Seconds").innerHTML = "00";
    document.getElementById("Tens").innerHTML = "00";
    Tens = 0;
    Seconds = 0;
    Minutes = 0;
}

/*
This function is called when button "start" is clicked
This will run every 10th of a second and each time it will count
It will count "10s" till its hit 100 , which will then become a "second"
Seconds will be updated to minutes once 60 seconds have passed
*/
const StartTimer = () => {
    Tens++;
    if (Tens < 9) {
        document.getElementById("Tens").innerHTML = "0" + Tens;
    }
    if (Tens > 9 && Tens < 99) {
        document.getElementById("Tens").innerHTML = Tens;
    }
    if (Tens > 99) {
        Seconds++;
        Tens = 0;
        document.getElementById("Seconds").innerHTML = "0" + Seconds;
        document.getElementById("Tens").innerHTML = "00";
    }
    if (Seconds > 9) {
        document.getElementById("Seconds").innerHTML = Seconds;
    }
    if (Seconds > 60) {
        Minutes++;
        Seconds = 0;
        document.getElementById("Minutes").innerHTML = "0" + Minutes;
        document.getElementById("Seconds").innerHTML = "00";
    }
}

/*
This is the main start function that is called by the start button
Clicking this simply starts the interval and counting
*/
const Start = () => {
    Count = setInterval(StartTimer, 10);
}

/*
This is the funcrion that will stop the counting upon the stop button being clicked
This does nothing more than stop the "Count interval that was created" by the start function
*/
const End = () => {
    clearInterval(Count);
}