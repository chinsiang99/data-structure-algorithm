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
console.time('timer')
console.log(method(arr, target))
console.timeEnd('timer')

function method2(arr, target){
    let answer = new Set()
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            let set = new Set()
            for(let k = j+1; k < arr.length; k++){
                let forthElement = target - arr[i] - arr[j] - arr[k]
                if(set.has(forthElement)){
                    let forplet = [arr[i], arr[j], arr[k], forthElement].sort((a, b)=>a-b).join(',')
                    answer.add(forplet)
                }
                set.add(arr[k])
            }
        }
    }

    return Array.from(answer).map(arr=>{
        return arr.split(',').map(Number)
    })
}

// time complexity is O(n^3), space complexity is O(n)
console.time('timer2')
console.log(method2(arr, target))
console.timeEnd('timer2')

// optimal solution
function method3(arr, target){
    // sort first
    arr.sort((a,b)=>a-b)
    let answer = new Set()

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            let l = arr.length - 1
            for(let k = j+1; k < arr.length; k++){
                while(k < l){
                    let total = arr[i] + arr[j] + arr[k] + arr[l]
                    if(total === target){
                        let forplet = [arr[i], arr[j], arr[k], arr[l]].sort((a, b)=>a-b).join(',')
                        answer.add(forplet)
                        k++
                        l--
                        while(arr[k] === arr[k-1]) k++
                        while(arr[l] === arr[l+1]) l--
                    }else if(total < target){
                        k++
                    }else{
                        l--
                    }
                }
            }
        }
    }

    return Array.from(answer).map(arr=>{
        return arr.split(',').map(Number)
    })
}
// time complexity will be O(n^3) but space complexity will nly consume the set that we include to be returned
console.time('timer3')
console.log(method3(arr, target))
console.timeEnd('timer3')