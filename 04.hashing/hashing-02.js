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