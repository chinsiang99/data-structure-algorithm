let n = 5
// problem 1 => summation of n numbers

// problem 1a is actually parameterize way
console.log("problem 1a here....")
function problem1a(n, sum){
    if(n < 1){
        console.log(sum)
        return
    }
    problem1a(n-1, sum + n)
}

// time complexity is O(n), space complexity is O(n)
problem1a(n, 0)

// problem 1b
// problem 1b is actually using function way
console.log("problem 1b here...")
function problem1b(n){
    if(n === 0){
        return 0
    }
    return n + problem1b(n-1)
}

console.log(problem1b(n))

