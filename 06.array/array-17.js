// majority element, we take the number that is more than (n/2) times
// example there is 9 elements, so it must be more than 4

let array = [2, 2, 3, 3, 1, 2, 2]

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

console.log(majority(array))
