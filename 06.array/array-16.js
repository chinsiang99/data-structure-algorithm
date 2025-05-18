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

// we can have a best solution out of this...
// lets say we already knew that there is only three kind of numbers, which is actually 0, 1, 2, we can view it as 4 sections...
// so we can actually say that 
// 0 to low - 1 is actually 0
// low to mid - 1 is actually 1
// high+1 to n - 1 is actually 2
// example visualization
// it is like 0...low - 1, low...mid - 1, mid...high, high + 1 ... n - 1
// the idea is that we can see the array as mid ... high
// so we here mid is actually low also,
// if we want arr[mid] is sorted, if it is 0, we need to take the low and swap it, so it can be ordered
// after swapping mid = mid + 1, low = low + 1
// if arr[mid] is 1, we do not need to swap anything, but we need to mid = mid + 1
// if arr[mid] is 2, we will swap arr[mid] with arr[high], then mid = mid + 1, high = high - 1

let array2 = [1, 0, 2, 1, 0, 1, 2, 2, 1, 0, 0]
function threePointerSolution(arr){
    let low = 0
    let mid = 0
    let high = arr.length - 1

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else if (arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;  // Only decrement high here, do not increment mid
        }
    }
}

// note that the time complexity of this approach has a O(n), and space complexity of O(1)
threePointerSolution(array2)
console.log(array2)

// please view this

console.log("--- revision starts here ---")

let array1 = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]

let pointer0 = -1
let pointer1 = 0
let pointer2 = 1
for(let i = 0; i < array1.length; i++){
    if(array1[i] === 0){
        pointer0++
        pointer1++
    }else if(array1[i] === 1){
        pointer1++
    }
}

console.log(pointer0, pointer1, pointer2)

for(let i = 0; i <= pointer0; i++){
    array1[i] = 0
}

for(let i = pointer0 + 1; i < pointer1; i++){
    array1[i] = 1
}

for(let i = pointer1; i < array1.length; i++){
    array1[i] = 2
}

// please note that this has O(2n) time complexity
console.log(array1)

// now we will do a better one, but we need some imagination here...

let arrayOptimal = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1]

let low = 0
let mid = 0
let high = arrayOptimal.length - 1

while(mid <= high){
    if(arrayOptimal[mid] === 0){
        if (low !== mid) {
            arrayOptimal[low] ^= arrayOptimal[mid]
            arrayOptimal[mid] ^= arrayOptimal[low]
            arrayOptimal[low] ^= arrayOptimal[mid]
        }
        low++
        mid++
    }else if(arrayOptimal[mid] === 1){
        mid++
    }else{
        if (mid !== high) {
            arrayOptimal[high] ^= arrayOptimal[mid]
            arrayOptimal[mid] ^= arrayOptimal[high]
            arrayOptimal[high] ^= arrayOptimal[mid]
        }
        high--
    }
}

console.log(arrayOptimal)