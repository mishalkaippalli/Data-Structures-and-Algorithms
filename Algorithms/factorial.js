function factorial(n) {
    let result = 1 ;
    for(let i = 2; i <= n; i++){
        result = result * i
    }
    return result;
} 
console.log(factorial(5))

//Big-O - o(n) linear

function recFactorial(n) {
    if(n == 0) return 1

    return n * recFactorial(n-1)
}
console.log(recFactorial(5));

//Big-0 = 0(n)