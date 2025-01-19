// problem, find the first and last occurance of x

let arr = [2, 4, 6, 8, 8, 8, 11, 13]

let target = 8
function method1(arr, target){
    let first = -1, last = -1

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            if(first === -1){
                first = i
                last = i
            }else{
                last = i
            }
        }
    }

    return [first, last]
}

console.log(method1(arr, target))
