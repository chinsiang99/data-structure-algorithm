// majority element, we take the number that is more than (n/2) times
// example there is 9 elements, so it must be more than 4

let array = [2, 2, 3, 3, 1, 2, 2, 1, 1, 2, 2]

function majority(arr){
    let map = new Map()
    let majority = Math.floor(arr.length / 2) + 1
    let valueTobeReturned = -1
    for(let i = 0; i < arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i], 1)
        }else{
            let newCount = map.get(arr[i]) + 1
            if(newCount >= majority){
                valueTobeReturned = arr[i]
                break;
            }
            map.set(arr[i], newCount)
        }
    }
    return valueTobeReturned
}
// the time complexity is O(n), the space complexity is O(n)
console.log(majority(array))

// now we will try to have a better approach, which is utilizing one of the algorithm, which is moore's voting algorithm
// this is a thought process...
// we must know that we can iterate through the array and check whether it is a dominant element, once it is becoming 0, then means that it is being neutralized, it is not a dominant element in that space

function mooreVotingAlgorithm(arr){
    let element = -1
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(count === 0){
            element = arr[i]
            count++
        }

        if(arr[i] === element){
            count++
        }else{
            count--
        }
    }
    if(count === 0){
        return -1
    }else{
        let threshold = Math.floor(arr.length / 2) + 1
        let actualCount = 0
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === element){
                actualCount++
                if(actualCount >= threshold){
                    break;
                }
            }
        }
        if(actualCount >= threshold){
            return element
        }else{
            return -1
        }
    }
}

// here, our time complexity is actually O(n) + O(n), which can consider O(n), and space complexity is none, O(1)
console.log(mooreVotingAlgorithm(array))
