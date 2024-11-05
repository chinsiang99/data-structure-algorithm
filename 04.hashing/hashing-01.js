// problem 1 - count elements of an array

let arr = [1, 2, 3, 4, 5, 1, 2, 3]
function method1(arr){
    let newArray = Array(12).fill(0)

    for(let i = 0; i < arr.length; i++){
        let number = arr[i]
        newArray[number - 1] = newArray[number - 1] + 1
    }

    return newArray
}

console.log(method1(arr))