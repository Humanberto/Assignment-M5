// STEP 1

// function halfNumber(number) {
//     let  numberHalf = number / 2;
//     return `Half of 5 is ${numberHalf}`;
// }

// halfNumber();

// console.log(halfNumber(5));

//STEP 2

// function squareNumber(number) {
//     let  numberSquare = Math.pow(number,2);
//     return `The result of squaring the number ${number} is ${numberSquare}.`;
// }

// squareNumber();

// console.log(squareNumber(3));


//STEP 3

// function percentOf(num1, num2) {

//     let percentage = (num1 / num2)*100;
//     return `${num1} is ${percentage}% of ${num2}.`;
// }

// percentOf();

// console.log(percentOf(2,4));


//STEP 4

function findModulus(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        return "Please enter numeric values.";
        } else {
           let modulus = num1 % num2;
           return `${modulus} is the modulus of ${num1} and ${num2}.`;
        }
    }
        findModulus();

        console.log(findModulus(4,10))
          


//STEP 5