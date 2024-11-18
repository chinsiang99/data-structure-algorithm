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
