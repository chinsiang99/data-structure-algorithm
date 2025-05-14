// union of two sorted array
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [4, 5, 6, 7, 8, 9, 11, 12]

// note here, union meaning that no duplicates value

function union(arr1, arr2){
    let set = new Set()
    for(let i = 0; i < arr1.length; i++){
        set.add(arr1[i])
    }

    for(let i = 0; i < arr2.length; i++){
        set.add(arr2[i])
    }

    return Array.from(set)
}

// time complexity is O(n1 + n2 + n1 union n2) => can say it is O(n) and the space complexity is O(n1 union n2)
console.log(union(arr1, arr2))

// better approach, two pointer
function unionOptimal(arr1, arr2){
    let union = []
    let i = 0; j = 0
    let previousElement
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            if(arr1[i] !== union[union.length - 1]){
                union.push(arr1[i])
            }
            i++
        }else{
            if(arr2[j] !== union[union.length - 1]){
                union.push(arr2[j])
            }
            j++
        }
    }

    while(i < arr1.length){
        if(arr1[i] !== union[union.length - 1]){
            union.push(arr1[i])
        }
        i++
    }

    while(j < arr2.length){
        if(arr2[j] !== union[union.length - 1]){
            union.push(arr2[j])
        }
        j++
    }

    return union
}

console.log(unionOptimal(arr1, arr2))

console.log("--- revision starts here ---")

let array1 = [1, 2, 3, 4, 5]
let array2 = [4, 5, 6, 7, 8, 9, 11, 12]

let newSet = new Set()

for(let i = 0; i < array1.length; i++){
    newSet.add(array1[i])
}

for(let i = 0; i < array2.length; i++){
    newSet.add(array2[i])
}

// this will have complexity of n + m + k, meaning maybe 3n and space complexity of n
console.log(Array.from(newSet))


// now we will try to use the two pointer approach
let pointer1 = 0
let pointer2 = 0
let newUnionArray = []

while(pointer1 < array1.length && pointer2 < array2.length){
    if(array1[pointer1] <= array2[pointer2]){
        if(newUnionArray.length === 0 || array1[pointer1] !== newUnionArray[newUnionArray.length - 1]){
            newUnionArray.push(array1[pointer1]) 
        }
        pointer1++
    }else{
        if(newUnionArray.length === 0 || array2[pointer2] !== newUnionArray[newUnionArray.length - 1]){
            newUnionArray.push(array2[pointer2])
        }
        pointer2++
    }
}

while(pointer1 < array1.length){
    if(newUnionArray.length === 0 || array1[pointer1] !== newUnionArray[newUnionArray.length - 1]){
        newUnionArray.push(array1[pointer1])
    }
    pointer1++
}

while(pointer2 < array2.length){
    if(newUnionArray.length === 0 || array2[pointer2] !== newUnionArray[newUnionArray.length - 1]){
        newUnionArray.push(array2[pointer2])
    }
    pointer2++
}

console.log(newUnionArray)