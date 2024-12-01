// 4 sum problem

let arr = [1, 0, -1, 0, -2, 2]
let target = 0

function method(arr, target){
    let answer = new Set()
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            for(let k = j+1; k < arr.length; k++){
                for(let l = k+1; l < arr.length; l++){
                    if(arr[i] + arr[j] + arr[k] + arr[l] === target){
                        const forplet = [arr[i], arr[j], arr[k], arr[l]].sort((a,b)=>a-b).join(',')
                        answer.add(forplet)
                    }
                }
            }
        }
    }

    return Array.from(answer).map(arr=>{
        return arr.split(',').map(Number)
    })
}
// time complexity is O(n^4), time complexity is O(n)
console.log(method(arr, target))