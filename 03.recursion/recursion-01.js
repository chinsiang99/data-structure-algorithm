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

// problem 5...
console.log("problem 5 start here")
function problem5(i, n){
    if(i > n){
        return
    }
    problem5(i+1, n)
    console.log(i)
}

problem5(1, 5)


console.log("--- revision starts here ---")

// recursive basic problems
// 1. printing name 5 times
// 2. print from 1 to n
// 3. print from n to 1
// 4. print from 1 to n (but with backtrack)
// 5. print from n to 1 (but with backtrack)

console.log("problem 1 here, printing name 5 times")
function function1(n){
    if(n === 0){
        return
    }

    console.log("name is here")
    function1(n-1)
}

function1(5)

console.log("problem 2 here, printing 1 to n")
let k = 5

function function2(initial, n){
    if(initial > n){
        return
    }
    console.log(initial)
    function2(initial + 1, n)
}

function2(1, k)

console.log("problem 3 here, from n to 1")
function function3(n){
    if(n === 0){
        return
    }
    console.log(n)
    function3(n - 1)
}

function3(k)

console.log("problem 4 here, printing 1 to n but backtracing, meaning not using - oranything")
// let k = 5

function function4(n){
    if(n < 1){
        return
    }

    function4(n-1)
    console.log(n)
}

function4(k)

console.log("problem 5 here, printing n to 1 but backtracing, meaning not using - or anything")
// let k = 5

function function5(initial, n){
    if(initial > n){
        return
    }

    function5(initial + 1, n)
    console.log(initial)
}

function5(1, k)


// final revision

// recursive basic problems
// 1. printing name 5 times
// 2. print from 1 to n
// 3. print from n to 1
// 4. print from 1 to n (but with backtrack)
// 5. print from n to 1 (but with backtrack)
let name = "chin siang"
function solution1(name, times){
    if(times === 0){
        return
    }
    console.log(name)
    solution1(name, times - 1)
}

// this solution has time complexity of O(n)
// but this solution is having extra space complexity which is O(n)
// note that space complexity is based on the stack space
solution1(name, 5)

console.log("linear starts now")

for(let i = 0; i < 5; i++){
    console.log(name)
}

// above solution is only having time complexity of O(n) and space complexity of O(1)


function solution2(number, initial = 1){
    if(initial > number){
        return
    }

    console.log(initial)
    solution2(number, initial + 1)
}

// note that time complexity and space complexity is O(n)
solution2(2)
solution2(5)

console.log("next")

function solution3(number){
    if(number === 0){
        return
    }
    console.log(number)
    solution3(number - 1)
}

solution3(2)
solution3(5)

console.log("next")


function solution4(number, initial = 0){
    if(number === initial){
        return
    }

    solution4(number - 1, initial)
    console.log(number)
}

solution4(2)
solution4(5)

console.log("next")


// n to 1
function solution5(number, initial = 1){
    if(initial > number){
        return
    }

    solution5(number, initial + 1)
    console.log(initial)
}

solution5(2, 1)
solution5(5, 1)