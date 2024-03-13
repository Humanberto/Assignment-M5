// ADD A FUNCTION CALLED CALCULATE

function  calculate(x, y, operation) { 
    
        if (operation === '+') return x + y;
        else if (operation === '-') return x - y;
        else if (operation === '*') return x * y;
        else if (operation === '/') return  x / y;
        else;
        alert("Invalid Operation! Valid operators are: +, -, * and /");  
}

// COLLECT FIRST NUMBER FROM USER
let x = prompt('Enter the first number: ');

// COLLECT SECOND NUMBER FROM USER
let y = prompt('Enter you second number: ');

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation = prompt('Choose add (+), subtract (-), multiply (*),  or divide (/):');

// while...

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(parseFloat(x), parseFloat(y), operation)
alert(result);