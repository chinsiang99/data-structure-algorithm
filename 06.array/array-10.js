// intersection of two sorted array
// intersection meaning that present in both

let arr1 = [1, 2, 2, 3, 3, 4, 5, 6]
let arr2 = [2, 3, 3, 5, 7]

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

console.log(intersection(arr1, arr2))