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


console.log("--- revision starts here ---")


arr = [1, 2, 3, 4, 5, 1, 2, 3]
function method(arr){
    let newArray = Array(arr.length).fill(0)

    for(let i = 0; i < arr.length; i++){
        let number = arr[i]
        newArray[number - 1] = newArray[number - 1] + 1
    }

    return newArray
}

console.log(method(arr))

function method2(arr){
    let newMap = new Map()
    for(let i = 0; i < arr.length; i++){
        if(newMap.has(arr[i])){
            newMap.set(arr[i], newMap.get(arr[i]) + 1)
        }else{
            newMap.set(arr[i], 1)
        }
    }

    return newMap
}

console.log(method2(arr))