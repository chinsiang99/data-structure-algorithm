// bubble sort

let newArray = [1, 5, 6, 3, 9, 2, 3, 1, 7, 6]
function bubbleSortAsc(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let count = 0
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                count++
            }
        }
        if(count === 0){
            break;
        }
    }   
}

bubbleSortAsc(newArray)
console.log(newArray)

function bubbleSortDesc(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let count = 0
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] < arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                count++
            }
        }
        if(count === 0){
            break;
        }
    }
}

bubbleSortDesc(newArray)
console.log(newArray)

// both time complexity is O(n^2)