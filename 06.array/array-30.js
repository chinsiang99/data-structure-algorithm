// problem 3 sum
// we should return all the unique triplets

let arr = [-1, 0, 1, 2, -1, -4]

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

console.log(method(arr, target))