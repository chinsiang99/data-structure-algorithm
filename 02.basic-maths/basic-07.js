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

console.log("--- revision starts here ---")

// gcd (greatest common divisor) / hcf (highest common factor)

let k = 2
let k2 = 4

function gcd(n, n2){
    while(Math.min(n, n2) !== 0){
        let diff = Math.max(n, n2) - Math.min(n, n2)
        if(n >= n2){
            n = diff
        }else{
            n2 = diff
        }
    }

    console.log(Math.max(n, n2))
}

gcd(k, k2)

function gcd2(n, n2){
    while(Math.min(n, n2) !== 0){
        let remainder = Math.max(n, n2) % Math.min(n, n2)

        if(n >= n2){
            n = remainder
        }else{
            n2 = remainder
        }
    }

    console.log(Math.max(n, n2))
}

gcd2(k, k2)

// final revision


let number = 8
let number2 = 16

let minimum = Math.min(number, number2)
let maximum = Math.max(number, number2)
let gcdResult = 1
for(let i = 1; i * i <= minimum; i++){
    if(minimum % i === 0 && maximum % i === 0){
        let secondNumber = minimum / i
        gcdResult = Math.max(i , gcdResult)
        if(maximum % secondNumber === 0){
            gcdResult = Math.max(secondNumber, gcdResult)
            break;
        }
    }
}

console.log(gcdResult, "revision")



function bestSolution(a, b){
    while(Math.max(a, b) % Math.min(a, b) !== 0){
        let remainder = Math.max(a, b) % Math.min(a, b)
        a = Math.min(a, b)
        b = remainder
    }

    return Math.min(a, b)
}

console.log(bestSolution(8, 16))
console.log(bestSolution(2, 4))
console.log(bestSolution(12, 13))
console.log(bestSolution(12, 24))


// practise for a job application
console.log("-----for job application-----")
// gcd (greatest common divisor) / hcf (highest common factor)

a = 9
b = 12

let result = 1
for(let i = 1; i * i <= a; i++){
    if(a % i === 0 && b % i === 0){
        let opposite = a / i
        if(b % opposite === 0){
            result = opposite
            break
        }
        result = i
    }
}
console.log(result)

// there is another method to do it, so please do it later

a = 9
b = 12

while(Math.min(a, b) !== 0){
    let diff = Math.max(a, b) - Math.min(a, b)
    if(a >= b){
        a = diff
    }else{
        b = diff
    }
}

console.log(Math.max(a, b))

// this has actually higher complexity O(max(a, b))

// below is the optimal way, which is using modular
// why modular works tho?

a = 9
b = 12
// please note that this is Euclid’s algorithm
while(b !== 0){
    let remainder = a % b
    a = b
    b = remainder
}

console.log(a)
// this will have time complexity of O(log(min(a,b)))