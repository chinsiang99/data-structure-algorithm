// palindrome problem
// note that palindrome are the numbers for which reverse is exactly the same as the original number
let n = 1234
let n2 = 121
let n3 = 2222
let n4 = 992837
function method(n){
    let originalValue = n
    let reverseNumber = 0
    while(n > 0){
        let remainderValue = n % 10
        n = Math.floor(n / 10)
        reverseNumber = reverseNumber * 10 + remainderValue
    }
    return reverseNumber === originalValue
}

console.log(method(n))
console.log(method(n2))
console.log(method(n3))
console.log(method(n4))

// note that the time complexity is actually log base 10 n