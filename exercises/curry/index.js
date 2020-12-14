// function curry(f) { // curry(f) does the currying transform
//     return function(a) {
//       return function(b) {
//         return f(a, b);
//       };
//     };
//   }
//   function sum(a, b) {
//     return a + b;
//   }

//   let curriedSum = curry(sum);  

//   console.log(( curriedSum(1)(2) ))


let multiply = function (x) {
    return function (y) {
        return x * y;
    }
}

let MultiplyByTwo = multiply;
console.log(MultiplyByTwo(3)(2))


