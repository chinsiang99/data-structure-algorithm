// example pattern
// A 
// B B
// C C C
// D D D D
// E E E E E

let n = 5
let charCode = 65 // equivalent to A
for(let i = 0; i < n; i++){
    let print = ""
    for(let j = 0; j < i + 1; j++){
        print = print + String.fromCharCode(charCode) + " "
    }
    console.log(print)
    charCode++
}