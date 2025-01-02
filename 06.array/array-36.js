// counting inversions in an array (counting pairs)
// we wanted to find out pairs that left is greater than right

let arr = [5, 3, 2, 4, 1]

function method1(arr){
    let countOfPairs = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                countOfPairs++
            }
        }
    }

    return countOfPairs
}

// time complexity is O(n^2), space complexity is O(1)
console.log(method1(arr))