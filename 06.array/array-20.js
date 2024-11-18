// rearrange array elements by sign
// in this question, there is actually equal number of positive elements and negative elements
// which meaning that there will be even number of elements inside the array
// so the task, is to rearrange the order so that it iwll be +, -, +, -

let array = [3, 1, -2, -5, 2, -4]

function method1(arr){
    let positive = []
    let negative = []
    let finalArray = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positive.push(arr[i])
        }else{
            negative.push(arr[i])
        }
    }

    for(let i = 0; i < positive.length; i++){
        finalArray.push(positive[i])
        finalArray.push(negative[i])
    }

    return finalArray
}
console.log(method1(array))

function method2(arr){
    let positive = 0
    let negative = 1

    while(positive < arr.length && negative < arr.length){
        // find the first missmatch for positive number
        while(positive < arr.length && arr[positive] > 0){
            positive += 2
        }

        // find the first missmatch for negative number
        while(negative < arr.length && arr[negative] < 0){
            negative += 2
        }

        // Swap the mismatched elements (only if valid indices)
        if (positive < arr.length && negative < arr.length) {
            [arr[positive], arr[negative]] = [arr[negative], arr[positive]];
        }
    }
}

method2(array)

console.log(array)
