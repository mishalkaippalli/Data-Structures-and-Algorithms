function fibonnacci(n) {
    let fib = [0,1]
    for(let i = 2; i <= n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
       return fib; 
}
console.log(fibonnacci(7));

//Big-o - o(n) linear

function fibrecursive(n){
    if(n < 2) return n
   
        return fibrecursive(n-1) + fibrecursive(n-2)
} 
console.log(fibrecursive(7));

//Big-0 - recursive 0(2^n)