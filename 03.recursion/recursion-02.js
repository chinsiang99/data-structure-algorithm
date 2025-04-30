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

// problem 2 => factorial
console.log("problem 2a here...")
function problem2a(n, result){
    if(n === 1){
        return result
    }

    return problem2a(n-1, result * n)
}

console.log(problem2a(n, 1))

// problem 2b
console.log("problem 2b here...")
function problem2b(n){
    if(n === 0){
        return 1
    }

    return n * problem2b(n-1)
}

console.log(problem2b(n))


console.log("--- revision starts here ---")

let k = 5
// problem 1 => summation of n numbers

function parameterised1(n, sum){
    if(n < 1){
        console.log(sum)
        return
    }
    parameterised1(n - 1, sum + n)
}

parameterised1(k, 0)


function functional1(n){
    if(n === 0){
        return 0
    }

    return n + functional1(n - 1)
}

console.log(functional1(k))


// problem 2 => factorial

function parameterised2(n, result){
    if(n === 1){
        return result
    }

    return parameterised2(n - 1, result * n)
}

console.log(parameterised2(n, 1))

function functional2(n){
    if(n === 1){
        return 1
    }
    return n * functional2(n - 1)
}

console.log(functional2(k))