let num1 = 3;
let num2 = 5;
function squareAddSquare(num1, num2) {
    return Math.pow((Math.pow(num1, 2) + Math.pow(num2, 2)), 2)
}

const squareAddSquare1 = function (num1, num2) {
    let sum = (num1 * num1) + (num2 * num2);
    return sum * sum;
}

const squareAddSquare2 = (num1, num2) => Math.pow((Math.pow(num1, 2) + Math.pow(num2, 2)), 2);

console.log(squareAddSquare(num1, num2));
console.log(squareAddSquare1(num1, num2));
console.log(squareAddSquare2(num1, num2));