// Project Euler Problem 2

var a, b, total;
var numbers = [];
var result = 0;

a = 0;
b= 1;
total = b;

for (i = 1; i < 33; i++) {
    
    total = a+b;
    a = b;
    b = total;
    
    numbers.push(total);
}

for (x = 0; x < numbers.length; x++) {
    if (numbers[x] % 2 ===0) {
    result += numbers[x];
    }
}

console.log(result);

// end problem 2