// recursive basic problems
// 1. printing name 5 times
// 2. print from 1 to n
// 3. print from n to 1
// 4. print from 1 to n (but with backtrack)
// 4. print from n to 1 (but with backtrack)

// problem 1...
let n = 5
function problem1(i, n){
    if(i > n){
        return
    }
    console.log(i)
    return problem1(i+1, n)
}

problem1(1, 5)