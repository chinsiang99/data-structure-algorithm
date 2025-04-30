// problem 1 => reverse an array
let array1 = [2, 3, 6, 1, 2]

// using looping method
function method1(arr){
    // let arrayLength = arr.length
    let firstIndex = 0
    let lastIndex = arr.length - 1
    while(firstIndex < lastIndex){
        [arr[firstIndex], arr[lastIndex]] = [arr[lastIndex], arr[firstIndex]]
        firstIndex++
        lastIndex--
    }
}

method1(array1)

console.log(array1)

// this method will have a n/2 time complexity


let array2 = [1, 5, 3, 2, 1, 4]
// method2 will be using recursive way, just an exercise
function method2(arr, first, last){
    if(first >= last){
        return
    }
    [arr[first], arr[last]] = [arr[last], arr[first]]
    method2(arr, first + 1, last - 1)
}

method2(array2, 0, array2.length - 1)

console.log(array2)

let string = "hello"
let string1 = 'iei'
let string2 = 'madam'
let string3 = '11211'
// problem 2, check whether a string is palindrome
function problem2a(string, first, last){
    if(first >= last){
        return true
    }
    if(string[first] !== string[last]){
        return false
    }
    return problem2a(string, first + 1, last - 1)
}

console.log(problem2a(string, 0, string.length - 1))
console.log(problem2a(string1, 0, string1.length - 1))
console.log(problem2a(string2, 0, string2.length - 1))
console.log(problem2a(string3, 0, string3.length - 1))


function problem2b(i){
    if(i >= string.length / 2){
        return true
    }
    if(string[i] !== string[string.length - 1 - i]){
        return false
    }
    return problem2b(i + 1)
}

console.log(problem2b(0))
console.log(problem2b(0))

console.log("--- revision starts here ---")

// problem 1 => reverse an array
let arrayk = [2, 3, 6, 1, 3, 5, 7, 8]

function reverseArrayLoop(array){
    for(let i = 0; i < array.length / 2; i++){
        [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]]
    }
}

reverseArrayLoop(arrayk)

console.log(arrayk)

let arrayj = [2, 3, 6, 1, 3, 5, 7, 8]
function reverseArrayRecursive(arrayj, first, last){
    if(first >= last){
        return
    }
    [arrayj[first], arrayj[last]] = [arrayj[last], arrayj[first]]
    reverseArrayRecursive(arrayj, first + 1, last - 1)
}

reverseArrayRecursive(arrayj, 0, arrayj.length - 1)

console.log(arrayj)

// problem 2, check whether a string is palindrome

let stringj = "hello"
let stringj1 = 'iei'
let stringj2 = 'madam'
let stringj3 = '11211'
function palindrome(string, first, last){
    if(first >= last){
        return true
    }

    if(string[first] !== string[last]){
        return false
    }

    return palindrome(string, first + 1, last - 1)
}

console.log(palindrome(stringj, 0, stringj.length - 1))
console.log(palindrome(stringj1, 0, stringj1.length - 1))
console.log(palindrome(stringj2, 0, stringj2.length - 1))
console.log(palindrome(stringj3, 0, stringj3.length - 1))

function palindromLoop(string){
    let last = string.length - 1
    for(let i = 0; i <= string.length / 2; i++){
        if(string[i] !== string[last]){
            return false
        }
        last = last - 1
    }
    return true
}

console.log(palindromLoop(stringj))
console.log(palindromLoop(stringj1))
console.log(palindromLoop(stringj2))
console.log(palindromLoop(stringj3))