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


console.log("--- revision starts here ---")

let k = 578751
let copy = k
let result = 0
while(copy > 0){
    let lastDigit = copy % 10
    result = result * 10 + lastDigit
    copy = Math.floor(copy / 10)
}

console.log(result === k)

// final revision

function methodPalindrome(number){
    let copy = number
    let reversed = 0
    while(number > 0){
        let remainder = number % 10
        number = Math.floor(number / 10)
        reversed = reversed * 10 + remainder 
    }

    return copy === reversed
}

console.log(methodPalindrome(n))
console.log(methodPalindrome(n2))
console.log(methodPalindrome(n3))
console.log(methodPalindrome(n4))


// practise for a job application
console.log("-----for job application-----")

// palindrome problem
// note that palindrome are the numbers for which reverse is exactly the same as the original number
n = 1234
n2 = 121
n3 = 2222
n4 = 992837

function palin(n){
    let reverse = 0
    let copy = n
    while(n > 0){
        let remainder = n % 10
        n = Math.floor(n / 10)
        reverse = reverse * 10 + remainder
    }

    if(reverse === copy){
        return true
    }

    return false
}

console.log(palin(n), n)
console.log(palin(n2), n2)
console.log(palin(n3), n3)
console.log(palin(n4), n4)