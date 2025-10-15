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

// note that this has a time complexity of n

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
    // for(let i = 1; i <= Math.sqrt(n); i++){
    // we can do below logic as well
    for(let i = 1; i*i <= n; i++){
        if(n % i === 0){
            let oppositeValue = n / i
            newSet.add(i)
            newSet.add(oppositeValue)
        }
    }
    return Array.from(newSet).sort((a, b) => a - b);
    // sorting has nlogn complexity, since the n is sqrt,
    // so it would be sqrtn logsqrtn
}


console.log(method2(36))
console.log(method2(32))

// note that the performance has been improved because the time complexity is now sqrt(n) in case for the for loops, and having a sqrtn logsqrtn
// so it is sqrtn + sqrtnlogsrtn
// == sqrtn (1 + logsqrtn)
// since we only see the bigger ones, so the time complexity would be sqrtnlogsqrtn
// note that if we didnt do the sorting, it will be way faster, which is sqrtn if we only console log directly

console.log("--- revision starts here ---")

// printing all divisors
// meaning that for 36
// we wil print out 1, 2, 3, 4, 6, 9, 12, 18, 36
// which is 36 can be divisible by all the above without any remainder

let k = 36

let divisors = [1, 36]
for(let i = 2; i * i <= k; i++){
    if(i * i === k){
        divisors.push(i)
    }else if(k % i === 0){
        divisors.push(k/i, i)
    }
}
console.log(divisors)

// time complexity will be sqrt(n)

// final revision

// printing all divisors
// meaning that for 36
// we wil print out 1, 2, 3, 4, 6, 9, 12, 18, 36
// which is 36 can be divisible by all the above without any remainder

let number = 36
let divisorsNumber = [1, number]
let copy = number
for(let i = 2; i * i <= number; i++){
    if(i * i === number){
        divisorsNumber.push(i)
    }else if(number % i === 0){
        divisorsNumber.push(i, number / i)
    }
}


// practise for a job application
console.log("-----for job application-----")

// printing all divisors
// meaning that for 36
// we wil print out 1, 2, 3, 4, 6, 9, 12, 18, 36
// which is 36 can be divisible by all the above without any remainder

let p = 36
let result = []
for(let i = 1; i * i <= p; i++){
    if(p % i === 0){
        let number1 = i
        let number2 = p / i
        if(number1 === number2){
            result.push(number1)
        }else{
            result.push(number1)
            result.push(number2)
        }
    }
    continue
}
console.log(result)
// note that the time compelxity is actually O(sqrt(n))