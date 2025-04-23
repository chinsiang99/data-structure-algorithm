// example pattern
// A B C D E
// A B C D
// A B C
// A B
// A

let n = 5

for(let i = 0; i < n; i++){
    let charCode = 65
    let print = ""
    for (let j = 0; j < n - i; j++) {
        print += `${String.fromCharCode(charCode)} `
        charCode++;
    }
    console.log(print)
}

console.log("--- revision starts here ---")

// A B C D E
// A B C D
// A B C
// A B
// A

let k = 5
for(let i = 0; i < k; i++){
    let row = ""
    for(let j = 0; j < k - i; j++){
        row += `${String.fromCharCode(65 + j)} `
    }
    console.log(row)
}