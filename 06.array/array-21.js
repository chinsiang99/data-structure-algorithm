// next permutation
// in this example there are 6 ways to change it...
// the ways are called permutation
let array = [2, 1, 5, 4, 3, 0, 0]

// let array = [5, 4, 3, 2, 1, 0]

// to generate all the permutaion in ascending order
// this problem is how we find the break point
function method(arr){
    let breakPoint = -1
    for(let i = arr.length - 1; i > 0; i--){
        if(arr[i-1] >= arr[i]){
            continue
        }else{
            breakPoint = i - 1
        }
    }

    // meaning that it is currently the largest one, so we need to flip it
    if(breakPoint === -1){
        let left = 0
        let right = arr.length - 1
        while(left < right){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }else{
        // console.log(breakPoint, "hehe")
        // now we want to check after the break point is there any possible value that is greater than that
        let initialValue = arr[breakPoint]
        // let minimumGreater = arr[breakPoint]
        let indexToBeStored = -1
        let minimumGreater = Number.MAX_SAFE_INTEGER
        for(let i = breakPoint + 1; i < arr.length; i++){
            if(arr[i] > initialValue && arr[i] < minimumGreater){
                minimumGreater = arr[i]
                indexToBeStored = i
            }
        }
        [arr[breakPoint], arr[indexToBeStored]] = [arr[indexToBeStored], arr[breakPoint]]

        let left = breakPoint + 1
        let right = arr.length - 1
        while(left < right){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
}

method(array)

console.log(array)
