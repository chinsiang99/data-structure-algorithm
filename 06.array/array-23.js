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
            currentConsecutiveSequence = 1
        }
    }
    return maximum
}

// this method has a time complexity of O(nlogn) + O(n)
console.log(method(array))

let array2 = [102, 4, 100, 1, 101, 2, 3, 2, 1, 1, 103, 104, 105]
function method2(arr){
    let newSet = new Set(arr)
    let count = 1
    for(const value of newSet){
        if(!newSet.has(value-1)){
            let currentCount = 1
            let referenceValue = value + 1
            while(true){
                if(!newSet.has(referenceValue)){
                    break;
                }else{
                    referenceValue++
                    currentCount++
                }
            }

            if(currentCount > count){
                count = currentCount
            }
        }
    }

    return count
}
// this method has a time complexity of O(2n) because we can see that the outer loop runs for n times, but the inner while loop will only run at most n times, therefore we can actually say it is not a multiply but an addition furthermore, we convert it to a set which consumes O(n), therefore total up should be O(3n) which can be said it is O(n), space complexity is O(n)
console.log(method2(array2))