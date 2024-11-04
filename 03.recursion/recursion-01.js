// recursive basic problems
// 1. printing name 5 times
// 2. print from 1 to n
// 3. print from n to 1
// 4. print from 1 to n (but with backtrack)
// 5. print from n to 1 (but with backtrack)

let n = 5
// problem 1...
console.log("problem 1 start here ...")
function problem1(n){
    if(n == 0){
        return
    }
    console.log("name")
    return problem1(n-1)
}

// note that this is having time complexity of O(n) and space complexity of O(n), becuas eit consumes n stack space
problem1(n)

// problem 2...
console.log("problem 2 start here ...")
function problem2(i, n){
    if(i > n){
        return
    }
    console.log(i)
    return problem2(i+1, n)
}

// note that this is having time complexity of O(n) and space complexity of O(n), becuas eit consumes n stack space
problem2(1, 5)

// problem 3
console.log("problem 3 start here ...")
function problem3(i, n){
    if(n < i){
        return
    }
    console.log(n)
    return problem3(i, n-1)
}

problem3(2, 5)

// problem 4...
console.log("problem 4 start here ...")
function problem4(i, n){
    if(i < 1){
        return
    }
    problem4(i - 1, n)
    console.log(i)
}

problem4(5, 5)