// majority element 2
// problem: return elements that appear more than n/3 times

let array = [1, 1, 1, 3, 3, 2, 2, 2]
let n = 8

function method(arr, n){
    let newMap = new Map()
    let returnArray = []
    for(let i = 0; i < arr.length; i++){
        if(!newMap.has(arr[i])){
            newMap.set(arr[i], 1)
        }else{
            newMap.set(arr[i], newMap.get(arr[i]) + 1)
        }
    }

    for(let [key, value] of newMap){
        if(value > Math.floor(n/3)){
            returnArray.push(key)
        }
    }

    return returnArray
}

// time complexity is O(2n) and space complexity is O(n)
console.log(method(array, n))

function method2(arr, n){
    let count1 = 0
    let count2 = 0
    let element1 = 0
    let element2 = 0

    for(let i = 0; i < arr.length; i++){
        if(count1 === 0 && element2 !== arr[i]){
            element1 = arr[i]
            count1++
        }else if(count2 === 0 && element1 !== arr[i]){
            element2 = arr[i]
            count2++
        }else if (element1 === arr[i]){
            count1++
        }else if(element2 === arr[i]){
            count2++
        }else{
            count1--
            count2--
        }
    }
    count1 = 0
    count2 = 0
    console.log(element1, element2)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element1){
            count1++
        }else if(arr[i] === element2){
            count2++
        }
    }

    if(count1 > Math.floor(n/3) && count2 > Math.floor(n/3)){
        return [element1, element2]
    }else if(count1 > Math.floor(n/3)){
        return [element1]
    }else if(count2 > Math.floor(n/3)){
        return [element2]
    }

    return -1
}

// time complexity is O(2n), space complexity is none
console.log(method2(array, n))