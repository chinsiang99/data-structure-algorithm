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


// now we will see the euclidean algorithm and how it works in this case
// the thory is 
// gcd (n1, n2) = gcd (n1-n2, n2) where n1 > n2
// therefore, we can actually reduce the time complexity more from there
function method3(a, b){
    let valueToBeDetermined = Math.max(a, b) - Math.min(a, b)
    // console.log(valueToBeDetermined, "value to be determined")
    let returnValue = 1
    for(let i = 1; i * i <= valueToBeDetermined; i++){
        if(a % i === 0 && b % i === 0){
            let biggerValue = valueToBeDetermined / i
            if(a % biggerValue === 0 && b % biggerValue === 0){
                returnValue = biggerValue
                break
            }else{
                returnValue = i
            }
        }
    }
    return returnValue
}

console.log(method3(a, b))

// for this euclidean algorithm, actually have different usage
function method4(a, b){
    // let returnValue
    while(a > 0 && b > 0){
        // let newValue = Math.abs(a - b)
        // if(newValue === 0){
        //     returnValue = Math.min(a, b)
        // }
        // if(a >= b){
        //     a = newValue
        // }else{
        //     b = newValue
        // }
        // we have a better way here
        if(a > b){
            a = a % b
        }else{
            b = b % a
        }
    }
    // return returnValue
    console.log("hello finished", a, b)
    return Math.max(a, b)
}

console.log(method4(a, b))

// note that the time complexity will be around O(log(min(a, b)))