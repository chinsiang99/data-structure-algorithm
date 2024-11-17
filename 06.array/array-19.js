// DP on stocks => need to check for space optimization
// we need to maximize the profit

let array = [7, 1, 5, 3, 6, 4]

function method1(arr){
    let minimumSoFar = arr[0]
    let profit = 0
    for(let i = 1; i < arr.length; i++){
        if((arr[i] - minimumSoFar) > profit){
            profit = arr[i] - minimumSoFar
        }

        if(arr[i] < minimumSoFar){
            minimumSoFar = arr[i]
        }
    }

    return profit
}

console.log(method1(array))