// problem: minimum in rotated array

let arr = [4, 5, 6, 7, 0, 1, 2]

function method1(arr){
    let answer = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(answer > arr[i]){
            answer = arr[i]
        }
    }

    return answer
}

console.log(method1(arr))