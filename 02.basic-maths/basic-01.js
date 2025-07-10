// counting how many digits are there

let n = 7789


function method1(n){
    let count = 0
    while(n > 0){
        count = count + 1
        n = Math.floor(n / 10)
    }
    return count
}

console.log(method1(n))

// now we will perform a more better way, which is using logarithm
// note that log10(x) = y => 10^y = x

function method2(n){
    return Math.floor((Math.log10(n) + 1))
}

console.log(method2(n))

// now we will discuss the time complexity of it,
// it should be O(log10(n))
// because it is divisibled by 10
// if it is being divisible by 2, then it would be log2(n)


console.log("--- revision starts here ---")

let k = 7789

let count = 0
while(k > 0){
    k = Math.floor(k / 10)
    count++
}

// time complexity for this is O(log10(n)) => n is the digit
console.log(count)

let m = 7789
let count1 = Math.floor(Math.log10(m)) + 1

// time complexity is the same
console.log(count1)



// final revision
let number = 7789
let countNumber = 0
while(number > 0){
    number = Math.floor(number / 10)
    countNumber++
}

console.log(countNumber)

// a better way is to use logarithmetic

let number2 = 77890

let countNumber2 = Math.floor(Math.log10(number2)) + 1
console.log(countNumber2)