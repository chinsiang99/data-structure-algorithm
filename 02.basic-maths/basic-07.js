// gcd (greatest common divisor) / hcf (highest common factor)

let a = 9
let b = 12

function method(a, b){
    let returnValue
    for(let i = 1; i <= Math.min(a, b); i++){
        if(a % i === 0 && b % i === 0){
            returnValue = i
        }
    }
    return returnValue
}

console.log(method(a, b))

// note that method has a time complexity of n

function method2(a, b){
    let returnValue
    for(let i = Math.min(a, b); i >= 1; i--){
        if(a % i === 0 && b % i === 0){
            returnValue = i
            break;
        }
    }
    return returnValue
}

console.log(method2(a, b))

// note that this method2 is slightly better because of we want to get the greatest common divisor, so it is better to count from the last, although it is still having time complexity of n