// sort an array of 0's, 1's, 2's

let array = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]

function sorting(arr){
    let map = new Map([[0, 0], [1, 0], [2, 0]])
    for(let i = 0; i < arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i], 1)
        }else{
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    let newArray = []
    for(const [key, value] of map){
        for(let i = 0; i < value; i++){
            newArray.push(key)
        }
    }

    return newArray
}

// time complexity is actually O(n) + O(n) which can consider O(n), space complexity wise, we are using a new Map(), which is actually a constant i would say, because we are having 0, 1, 2, it wont change, and for the return array, it would be size of array, which is O(n)
console.log(sorting(array))

