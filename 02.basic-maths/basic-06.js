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

// now we can observe something here
// for the last section, if we are getting the divisor, we can use sqrt, so we can reduce the time complexity

function isPrimeNumber2(n){
    for(let i = 2; i*i <= n; i++){
        if(n % i === 0){
            return false
        }
    }

    return true
}

console.log(isPrimeNumber2(n))
console.log(isPrimeNumber2(n2))
console.log(isPrimeNumber2(n3))
console.log(isPrimeNumber2(n4))

// note that the time complexity is actually now sqrt(n)


console.log("--- revision starts here ---")


// prime numbers
// prime number is a number that can only be divisible by itself and 1
let k = 3
let k2 = 6
let k3 = 4
let k4 = 11


function prime(n){
    for(let i = 2; i * i <= n; i++){
        if(n % i === 0){
            return false
        }
    }

    return true
}

console.log(prime(k))
console.log(prime(k2))
console.log(prime(k3))
console.log(prime(k4))