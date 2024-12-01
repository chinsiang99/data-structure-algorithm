// problem 3 sum
// we should return all the unique triplets

let arr = [-1, 0, 1, 2, -1, -4, 6, 3]

let target = 0

function method(arr, target){
    let newSet = new Set()
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            for(let k = j+1; k < arr.length; k++){
                if(arr[i] + arr[j] + arr[k] === target){
                    const triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b).join(',');
                    newSet.add(triplet);
                }
            }
        }
    }

    return Array.from(newSet).map(triplet => triplet.split(',').map(Number));
}
// time complexity is O(n^3) and space complexity is O(n^3)
console.log(method(arr, target))

function method2(arr, target){
    let newSet = new Set()
    for(let i = 0; i < arr.length; i++){
        let newSetInterval = new Set()
        for(let j = i + 1; j < arr.length; j++){
            let diff = target - arr[i] - arr[j]
            if(newSetInterval.has(diff)){
                const triplet = [arr[i], arr[j], diff].sort((a, b)=>a-b).join(',')
                newSet.add(triplet)
            }
            newSetInterval.add(arr[j])
        }
    }

    return Array.from(newSet).map(arr=>{
        return arr.split(',').map(Number)
    })
}
// time complexity is O(n^2)
console.log(method2(arr, target))

function method3(arr, target){
    arr.sort((a,b)=>a-b)
    console.log(arr, "this is array")
    let answer= []
    for(let i = 0; i < arr.length; i++){
        if(i > 0 && arr[i] === arr[i - 1]){
            continue;
        }
        let j = i + 1
        let k = arr.length - 1
        while(j < k){
            if(arr[i] + arr[j] + arr[k] === target){
                answer.push([arr[i], arr[j], arr[k]])
                j++
                k--
                while(arr[j] === arr[j-1]) j++
                while(arr[k] === arr[k+1]) k--
            }else if(arr[i] + arr[j] + arr[k] < target){
                j++
            }else{
                k--
            }
        }
    }

    return answer
}

// the optimal approach would be sorting the array first with 2 pointer approach
// time complexity will be O(n^2) and space complexity will be only the return answer, which is O(n)
console.log(method3(arr, target))