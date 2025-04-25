// armstrong number problem
// armstrong number is if you add individual number up with cube, then it will be the same number
// example:
// 371 = 3^3 + 7^3 + 1
// 1634 != 1^3 + 6^3 + 3^3 + 4^3 (not an armstrong number)
// 35 != 3^3 + 5^3 (not an armstrong number)

let n = 371
let n1 = 1634 // 1 + 216 + 27 + 64
let n2 = 35
function method(n){
    let originalValue = n
    let valueAfterCalculations = 0
    while(n > 0){
        let remainderValue = Math.floor(n % 10)
        n = n / 10
        valueAfterCalculations = valueAfterCalculations + Math.pow(remainderValue, 3)
    }
    return valueAfterCalculations === originalValue
}

console.log(method(n))
console.log(method(n1))
console.log(method(n2))

// note that the time complexity is actually log base 10 n


console.log("--- revision starts here ---")

let copy = n
let copy2 = n1
let copy3 = n2

function methodHi(input){
    let originalValue = input
    let result = 0
    while(input > 0){
        let lastDigit = input % 10
        result = result + Math.pow(lastDigit, 3)
        input = Math.floor(input / 10)
    }

    console.log(result === originalValue)
}

methodHi(copy)
methodHi(copy2)
methodHi(copy3)