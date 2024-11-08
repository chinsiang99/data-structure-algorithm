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