// intersection of two sorted array
// intersection meaning that present in both

let arr1 = [1, 2, 2, 3, 3, 4, 5, 6]
let arr2 = [3, 3, 5, 7]

// brute force way
function intersection(arr1, arr2){
    let intersect = []
    let map = new Map()
    for(let i = 0; i < arr1.length; i++){
        if(!map.has(arr1[i])){
            map.set(arr1[i], 1)
        }else{
            map.set(arr1[i], map.get(arr1[i]) + 1)
        }
    }

    for(let i = 0; i < arr2.length; i++){
        if(map.has(arr2[i]) && map.get(arr2[i]) >= 1){
            map.set(arr2[i], map.get(arr2[i]) - 1)
            intersect.push(arr2[i])
        }
    }
    return intersect
}

// note that the time complexity is actually n1 + n2 , space complexity is actually larger of n1, n2, and a intersect
console.log(intersection(arr1, arr2))

// two pointer
function intersectionOptimal(arr1, arr2){
    let i = 0
    let j = 0
    let intersect = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            intersect.push(arr1[i])
            i++;
            j++
        }else if(arr1[i] < arr2[j]){
            i++
        }else{
            j++
        }
    }
    return intersect
}
// time complexity is actually n1 + n2, without additional time complexity although as an intersect
console.log(intersectionOptimal(arr1, arr2))


console.log("--- revision starts here ---")


let array1 = [1, 2, 2, 3, 3, 4, 5, 6]
let array2 = [2, 2, 2, 3, 3, 5, 7]
let map = new Map()
let newIntersectArray = []

for(let i = 0; i < array1.length; i++){
    if(!map.has(array1[i])){
        map.set(array1[i], 1)
    }else{
        map.set(array1[i], map.get(array1[i]) + 1)
    }
}

for(let i = 0; i < array2.length; i++){
    if(map.has(array2[i]) && map.get(array2[i]) > 0){
        map.set(array2[i], map.get(array2[i]) - 1)
        newIntersectArray.push(array2[i])
    }
}

// time complexity is actually n.length + m.length 
// space complexity is Math.max(n.length, m.length)
console.log(newIntersectArray)

// now we can try two pointer approach

let pointer1 = 0
let pointer2 = 0
let newIntersection = []
while(pointer1 < array1.length && pointer2 < array2.length){
    if(array1[pointer1] < array2[pointer2]){
        pointer1++
    }else if(array1[pointer1] === array2[pointer2]){
        newIntersection.push(array1[pointer1])
        pointer1++
        pointer2++
    }else{
        pointer2++
    }
}

// note that space compelxity is being neglected
console.log(newIntersection)

// note that below approach is when we only want to have distinct value only
let previousElement = -1
let newA = []
pointer1 = 0
pointer2 = 0
while(pointer1 < array1.length && pointer2 < array2.length){
    if(array1[pointer1] === array2[pointer2] && array1[pointer1] !== previousElement){
        previousElement = array1[pointer1]
        newA.push(array1[pointer1])
        pointer1++
        pointer2++
    }else if(array1[pointer1] < array2[pointer2]){
        pointer1++
    }else{
        pointer2++
    }
}

console.log(newA)


// practise for a job application
console.log("-----for job application-----")

let first = [1, 2, 2, 3, 3, 4, 5, 5, 6]
let second = [2, 3, 3, 5, 6, 7]

let index1 = 0
let index2 = 0
let newArr = []
while (index1 < first.length && index2 < second.length){
    if(first[index1] === second[index2]){
        newArr.push(first[index1])
        index1++
        index2++
    }else if(first[index1] < second[index2]){
        index1++
    }else{
        index2++
    }
}

console.log(newArr)