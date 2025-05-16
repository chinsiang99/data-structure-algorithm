// find maximum consecutive 1s

let array = [1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1]

function findMaximumConsecutive(arr){
    let maximum = 0
    let consecutiveCount = 0
    let isConsecutive = false
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            if(!isConsecutive){
                consecutiveCount = 1
            }else{
                consecutiveCount++
            }
            isConsecutive = true
        }else{
            if(consecutiveCount > maximum){
                maximum = consecutiveCount
            }
            consecutiveCount = 0
            isConsecutive = false
        }
    }

    return maximum
}

console.log(findMaximumConsecutive(array))

console.log("--- revision starts here ---")

let consecArray = [1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1]

let startIndex = 0
let maximum = 1
for(let i = 1; i < consecArray.length; i++){
    if(consecArray[i] !== consecArray[startIndex]){
        maximum = Math.max(maximum, i - startIndex)
        startIndex = i
    }
}

maximum = Math.max(maximum, consecArray.length - startIndex - 1)
console.log(maximum)

// time complexity will be O(n)
// space complexity will be O(1)
// for this we will utilize two pointer approach in order to get consecutive array (same number)