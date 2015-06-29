// Project Euler Problem 1

var numbers = [];
var total = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        numbers.push(i);
    }
}

for (var x = 0; x <numbers.length; x++) {
    total+=numbers[x];
}

console.log(total);

// end problem 1