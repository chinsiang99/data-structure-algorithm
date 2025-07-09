// example pattern
// A 
// A B
// A B C
// A B C D
// A B C D E

let n = 5

for(let i = 0; i < n; i++){
    let charCode = 65
    let print = ""
    for (let j = 0; j < i + 1; j++) {
        print += `${String.fromCharCode(charCode)} `
        charCode++;
    }
    console.log(print)
}


console.log("--- revision starts here ---")

// A 
// A B
// A B C
// A B C D
// A B C D E

let k = 5
for(let i = 0; i < k; i++){
    // note that charcode A is 65
    let row = ""
    for(let j = 0; j < i + 1; j++){
        row += `${String.fromCharCode(65 + j)} `
    }
    console.log(row)
}

// final revision

// A 
// A B
// A B C
// A B C D
// A B C D E

let rows = 5
for(let i = 0; i < rows; i++){
    let string = ''
    for(let j = 0; j < i + 1; j++){
        let alphabet = String.fromCharCode(65 + j)
        string += `${alphabet} `
    }
    console.log(string)
}