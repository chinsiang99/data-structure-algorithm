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

console.log("--- revision starts here ---")

// A 
// B B
// C C C
// D D D D
// E E E E E

let k = 5
for(let i = 0; i < k; i++){
    let row = ""
    for(let j = 0; j < i + 1; j++){
        row += `${String.fromCharCode(65 + i)} `
    }
    console.log(row)
}

// final revision
// A 
// B B
// C C C
// D D D D
// E E E E E
let rows = 5
for(let i = 0; i < rows; i++){
    let strings = ''
    for(let j = 0; j < i + 1; j++){
        let alphabet = String.fromCharCode(65 + i)
        strings += `${alphabet} `
    }
    console.log(strings)
}


// practise for a job application
console.log("-----for job application-----")

let p = 5

for(let i = 0; i < p; i++){
    let row = ''
    for(let j = 0; j < i + 1; j++){
        row += `${String.fromCharCode(65 + i)} `
    }
    console.log(row)
}