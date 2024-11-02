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