// printing all divisors
// meaning that for 36
// we wil print out 1, 2, 3, 4, 6, 9, 12, 18, 36
// which is 36 can be divisible by all the above without any remainder
let n = 36
function method(n){
    // let divisors = "1"
    let setOfArray = new Set([1])
    for(let i = 2; i <= n; i++){
        if(n % i === 0){
            // divisors += ` ${i}`
            setOfArray.add(i)
        }
    }
    return setOfArray
}

console.log(method(n))
console.log(method(32))

// we can now observe something here
// if we look closely
// we can see that 
// 1 * 36
// 2 * 18
// 3 * 12
// 4 * 9
// 6 * 6

// if we see like 32
// 1 * 32
// 2 * 16
// 4 * 8

// we can conclude that for the square root of 32 or 36, we only need until that value and thats all
// console.log(Math.sqrt(32))

function method2(n){
    // let valuesReturned = "1"
    let newSet = new Set()
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            let oppositeValue = n / i
            newSet.add(i)
            newSet.add(oppositeValue)
        }
    }
    return Array.from(newSet).sort((a, b) => a - b);
}


console.log(method2(36))
console.log(method2(32))
