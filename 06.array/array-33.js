// merge overlapping subintervals
// meaning giving u an array of intervals, you need to merge wherever it has overlapping with each other

let arr = [
    [1, 3],
    [2, 6],
    [8, 9],
    [9, 11],
    [8, 10],
    [2, 4],
    [15, 18],
    [16, 17]
]
function method(arr){
    arr.sort((a, b)=>{
        if (a[0] === b[0]) {
            // If the first elements are the same, sort by the second element
            return a[1] - b[1];
          }
          // Otherwise, sort by the first element
          return a[0] - b[0];
    })
    console.log(arr)

    let answer = []
    let currentInterval = []
    for(let i = 0; i < arr.length; i++){
        if(!currentInterval.length){
            currentInterval.push(arr[i])
            continue
        }

        if(arr[i][0] <= currentInterval[0][1]){
            currentInterval[0][1] = arr[i][1]
        }else{
            answer.push(currentInterval[0])
            currentInterval = [arr[i]]
        }
    }
    answer.push(currentInterval[0])
    return answer
}

// time complexity is O(nlogn) + O(n), which is O(nlogn), and space complexity is the return answer
console.log(method(arr))