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