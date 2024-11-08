// linear search, return the index

let arrayNumbers = [6, 8, 3, 4, 1]


function linearSearch(arr, target){
    let index = -1
    for(let i = 0; i <arr.length; i++){
        if(arr[i] === target){
            index = i
        }
    }

    return index
}

console.log(linearSearch(arrayNumbers, 5))
console.log(linearSearch(arrayNumbers, 4))