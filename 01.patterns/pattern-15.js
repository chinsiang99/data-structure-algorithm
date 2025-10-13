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

// final revision
// A B C D E
// A B C D
// A B C
// A B
// A

let rows = 5
for(let i = 0; i < rows; i++){
    let numbers = ''
    for(let j = 0; j < rows - i; j++){
        let alphabet = String.fromCharCode(65 + j)
        numbers += `${alphabet} `
    }
    console.log(numbers)
}



// practise for a job application
console.log("-----for job application-----")

// A B C D E
// A B C D
// A B C
// A B
// A

let p = 5

for(let i = 0; i < p; i++){
    let row = ''
    for(let j = 0; j < p - i; j++){
        row += `${String.fromCharCode(65 + j)} `
    }
    console.log(row)
}

