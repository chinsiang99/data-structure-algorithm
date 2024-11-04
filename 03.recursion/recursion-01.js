// recursive basic problems
// 1. printing name 5 times
// 2. print from 1 to n
// 3. print from n to 1
// 4. print from 1 to n (but with backtrack)
// 4. print from n to 1 (but with backtrack)

let n = 5
// problem 1...
function problem1(n){
    if(n == 0){
        return
    }
    return problem1(n-1)
}

// note that this is having time complexity of O(n) and space complexity of O(n), becuas eit consumes n stack space
problem1(n)

// problem 2...
function problem2(i, n){
    if(i > n){
        return
    }
    console.log(i)
    return problem1(i+1, n)
}

// note that this is having time complexity of O(n) and space complexity of O(n), becuas eit consumes n stack space
problem2(1, 5)