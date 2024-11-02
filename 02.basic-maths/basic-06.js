// prime numbers
// prime number is a number that can only be divisible by itself and 1
let n = 3
let n2 = 6
let n3 = 4
let n4 = 11
function isPrimeNumber(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrimeNumber(n))
console.log(isPrimeNumber(n2))
console.log(isPrimeNumber(n3))
console.log(isPrimeNumber(n4))

// note that this has a time complexity of n