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


// practise for a job application
console.log("-----for job application-----")

// problem 1 - count elements of an array

arr = [1, 2, 3, 4, 5, 1, 2, 3]

let newArr = new Array(arr.length).fill(0)
let newMap = new Map()

for(let i = 0; i < arr.length; i++){
    if(newMap.has(arr[i])){
        newMap.set(arr[i], newMap.get(arr[i]) + 1)
    }else{
        newMap.set(arr[i], 1)
    }    
}

console.log(newMap)

// maybe we can make it two pointer?
// note that below has fewer rounds which lead to better time complexity as well
let leftPointer = 0
let rightPointer = arr.length - 1

let mapping = new Map()
while(leftPointer <= rightPointer){
    if(leftPointer === rightPointer){
        mapping.has(arr[leftPointer]) ? mapping.set(arr[leftPointer], mapping.get(arr[leftPointer]) + 1) : mapping.set(arr[leftPointer], 1)
    }else{
        mapping.has(arr[leftPointer]) ? mapping.set(arr[leftPointer], mapping.get(arr[leftPointer]) + 1) : mapping.set(arr[leftPointer], 1)
        mapping.has(arr[rightPointer]) ? mapping.set(arr[rightPointer], mapping.get(arr[rightPointer]) + 1) : mapping.set(arr[rightPointer], 1)
    }
    leftPointer++
    rightPointer--
}

console.log(mapping)
