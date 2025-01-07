// problem: implement lower bound
// the smallest index such that the number of that index is greater than or equal to given number

let arr = [3, 5, 8, 15, 19]
let target = 20

function method1(arr, target){
    let answer = arr.length
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= target){
            answer = i
            break;
        }
    }

    return answer
}

// time complexity is O(n)
console.log(method1(arr, target))

