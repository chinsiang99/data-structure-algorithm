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