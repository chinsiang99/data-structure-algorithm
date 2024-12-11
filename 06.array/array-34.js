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

arr = [1, 3, 5, 7]
arr2 = [0, 2, 6, 8, 9]

function method2(arr, arr2){

    let left = arr.length - 1
    let right = 0
    while(left >= 0 && right < arr2.length){
        if(arr[left] > arr2[right]){
            [arr[left], arr2[right]] = [arr2[right], arr[left]]
            left--
            right++
        }else{
            break;
        }
    }

    arr.sort((a, b)=>a-b)
    arr2.sort((a, b)=>a-b)

    return [arr, arr2]
}

// time complexity for this is actually including the sorting which is O(n log n) + O(m log m), space complexity is O(n) space
console.log(method2(arr, arr2))