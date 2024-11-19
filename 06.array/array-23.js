// longest consecutive sequence
// to look inside an array, whether it has consecutive sequence although them are not in order

let array = [102, 4, 100, 1, 101, 2, 3, 2, 1, 1, 103, 104, 105]

function method(arr){
    arr.sort((a, b) => a-b)
    let currentConsecutiveSequence = 1
    let maximum = 1
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === arr[i - 1]){
            continue
        }else if(arr[i] === arr[i - 1] + 1){
            currentConsecutiveSequence++
            if(currentConsecutiveSequence > maximum){
                maximum = currentConsecutiveSequence
            }
        }else{
            currentConsecutiveSequence = 0
        }
    }
    return maximum
}

console.log(method(array))
// console.log(array)