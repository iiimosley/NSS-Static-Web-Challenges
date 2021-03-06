//smallest number -- no remainder
let remainderButton = document.getElementById("remainder");
remainderButton.addEventListener("click", callBack, { once: true });

function callBack() {
    console.log("looking for answer...")
}

// lcm(a, b) = a × b / gcd(a, b)

// wwwwwwwwtttttttffffffffuuuuuuuuuuuu
// function leastCommonMultiple(min, max) {
//     function range(min, max) {
//         var arr = [];
//         for (var i = min; i <= max; i++) {
//             arr.push(i);
//         }
//         return arr;
//     }
    
//     function gcd(a, b) {
//         return !b ? a : gcd(b, a % b);
//     }
    
//     function lcm(a, b) {
//         return (a * b) / gcd(a, b);
//     }
    
//     var multiple = min;
//     range(min, max).forEach(function (n) {
//         multiple = lcm(multiple, n);
//     });
//     return multiple;
// }


//Fibonacci Generator
var numbers = [];

let genButton = document.getElementById("fibGen");
genButton.addEventListener("click", startGen, {once: true});

function startGen() {
    let num = [0];
    for (let i = 1; i <= 500; i = num[num.length - 2]) {
        num.push(i + num[num.length - 1]);
        console.log(num);
    }
};


//  What is the difference between the sum of the squares 
//  of the first ten natural numbers, 
//  and the square of the sum of the first ten natural numbers?
let sumButton = document.getElementById("sumSquare");
sumButton.addEventListener("click", function () {totalSum(10)}, {once: true});

function totalSum(e) {
    let squared = [];
    let sum = [];
    for (var i = 1; i < e+1; i++) {
        squared.push(Math.pow(i, 2));
        sum.push(i);
    };
    let squaredSum = squared.reduce(function(hold, run){
        return hold + run;});
    let sumSquared = Math.pow((sum.reduce(
            function (hold, run) {
            return hold + run;})),2);
    console.log("squared numbers", squared);
    console.log("natural numbers", sum);
    console.log("sum of squared numbers", squaredSum);
    console.log("square of summed numbers", sumSquared);
    console.log("squared sum - sum squared",squaredSum - sumSquared);
};


