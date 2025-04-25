// reverse a number
let n = 8896
function method(n){
    let valueToBeReturned = 0

    while(n > 0){
        let remainderValue = Math.floor(n % 10)
        n = Math.floor(n / 10)
        valueToBeReturned = valueToBeReturned * 10 + remainderValue
    }
    return valueToBeReturned
}

console.log(method(n))

// note that the time complexity is actually log base 10 n



console.log("--- revision starts here ---")


let k = 8896

let reversedNumber = 0
let trailingNumberZero = true
while(k > 0){
    let lastDigit = k % 10
    if(lastDigit === 0){
        if(!trailingNumberZero){
            reversedNumber = reversedNumber * 10 + lastDigit
        }
    }else{
        trailingNumberZero = false
        reversedNumber = reversedNumber * 10 + lastDigit
    }

    k = Math.floor(k/10)
}

// it is actually time complexity O(log10(n)), but this one is not efficient enough, because if it is 0 first at last digit, it will always get 0, so we shouldnt do something like this, below is a good example of it
console.log(reversedNumber)

let m = 40100
let result = 0
while(m > 0){
    let lastDigit = m % 10
    result = result * 10 + lastDigit
    m = Math.floor(m / 10)
}

console.log(result)