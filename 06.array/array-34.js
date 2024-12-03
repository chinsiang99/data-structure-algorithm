// merge 2 sorted arrays without extra spaces

let arr = [1, 3, 5, 7]
let arr2 = [0, 2, 6, 8, 9]

function method(arr, arr2){
    let answer = []

    let array1Count = arr.length
    let array2Count = arr2.length
    let count1 = 0
    let count2 = 0
    while(count1 < array1Count && count2 < array2Count){
        if(arr2[count2] < arr[count1]){
            answer.push(arr2[count2])
            count2++
        }else{
            answer.push(arr[count1])
            count1++
        }
    }

    while(count1 < array1Count){
        answer.push(arr[count1])
        count1++
    }

    while(count2 < array2Count){
        answer.push(arr2[count2])
        count2++
    }

    let cumulativeCount = 0
    for(let i = 0; i < arr.length; i++){
        arr[i] = answer[cumulativeCount]
        cumulativeCount++
    }

    for(let i = 0; i < arr2.length; i++){
        arr2[i] = answer[cumulativeCount]
        cumulativeCount++
    }

    return [arr, arr2]
}
// time complexity would be O(2n) + O(2m), space complexity would be O(n) space
console.log(method(arr, arr2))