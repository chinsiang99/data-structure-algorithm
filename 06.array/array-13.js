// find the number that appears once, other numbers will appear twice

let array = [1, 1, 2, 3, 3, 4, 4, 5, 5]

// brute force
let map = new Map()
for(let i = 0; i < array.length; i++){
    if(map.has(array[i])){
        map.set(array[i], map.get(array[i]) + 1)
    }else{
        map.set(array[i], 1)
    }
}

for(const [key, value] of map){
    if(value === 1){
        console.log(key)
        break;
    }
}


// there is actually a better way by using XOR, this eliminates the usage of a space

// let value = -1
let xor = array[0]
for(let i = 1; i < array.length; i++){
    xor = xor ^ array[i]
}
console.log(xor)
