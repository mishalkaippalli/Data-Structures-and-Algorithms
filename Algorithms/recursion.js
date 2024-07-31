
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Example usage:
console.log("factorial",factorial(5)); 

// Fibonacci Series
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Example usage:
console.log("fibonnacci: ",fibonacci(6)); 

// Sum of Array Elements
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}
// Example usage:
console.log("Sum array :",sumArray([1, 2, 3, 4, 5])); 


