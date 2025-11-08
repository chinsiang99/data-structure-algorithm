// character hashing
let string = 'abcdefgabdgatqj'
function method(string, toBeSearch){
    let map = new Map()
    for(let i = 0; i < string.length; i++){
        if(!map.has(string[i])){
            map.set(string[i], 1)
        }else{
            map.set(string[i], map.get(string[i]) + 1)
        }
    }
    return map.get(toBeSearch) ?? 0
}

console.log(method(string, 'a'))

// practise for a job application
console.log("-----for job application-----")

string = 'abcdefgabdgatqj'
let search = 'a'

let searchCount = 0
for(let i = 0; i < string.length; i++){
    if(string[i] === search){
        searchCount++
    }
}

console.log(searchCount)


// another method here which is using two pointer approach
let leftPointer = 0
let rightPointer = string.length - 1
searchCount = 0 

while(leftPointer <= rightPointer){
    if(leftPointer === rightPointer){
        if(string[leftPointer] === search){
            searchCount++
        }
    }else{
        if (string[leftPointer] === search) searchCount++
        if (string[rightPointer] === search) searchCount++
    }
    leftPointer++
    rightPointer--
}

console.log(searchCount)
