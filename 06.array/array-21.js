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




console.log("--- revision starts here ---")

let array2 = [2, 1, 5, 4, 3, 0, 0]

let breakPoint = -1
for(let i = array2.length - 1; i > 0; i--){
    if(array2[i - 1] < array2[i]){
        breakPoint = i - 1
    }
}

if(breakPoint === -1){
    let pointerleft = 0
    let pointerright = array2.length - 1
    while(pointerleft <= pointerright){
        let temp = array2[pointerleft]
        array2[pointerleft] = array2[pointerright]
        array2[pointerright] = temp
        pointerleft++
        pointerright--
    }
}else{
    for(let i = array2.length - 1; i > breakPoint; i--){
        if(array2[breakPoint] < array2[i]){
            let temp = array2[breakPoint]
            array2[breakPoint] = array2[i]
            array2[i] = temp
            break;
        }
    }

    let pointerleft = breakPoint + 1
    let pointerright = array2.length - 1
    while(pointerleft <= pointerright){
        let temp = array2[pointerleft]
        array2[pointerleft] = array2[pointerright]
        array2[pointerright] = temp
        pointerleft++
        pointerright--
    }
}

console.log(array2)