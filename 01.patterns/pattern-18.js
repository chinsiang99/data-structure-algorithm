// example pattern
// E 
// D E
// C D E
// B C D E
// A B C D E

let n = 5

for(let i = 0; i < n; i++){

    let charCode = 65 + n - (i + 1)
    let print = ""
    for(let j = 0; j < i + 1; j++){
        print += String.fromCharCode(charCode) + " "
        charCode++
    }
    console.log(print)
}

console.log("--- revision starts here ---")

// E 
// D E
// C D E
// B C D E
// A B C D E

let k = 5
for(let i = 0; i < k; i++){
    let runningNumber = 65 + k - i - 1
    let alphabet = ""
    for(let j = 0; j < i+1; j++){
        alphabet += `${String.fromCharCode(runningNumber)} `
        runningNumber++
    }
    console.log(alphabet)
}

// final revision
// E 
// D E
// C D E
// B C D E
// A B C D E

let rows = 5

for(let i = 0; i < rows; i++){
    let strings = ''
    let alphabetNumber = 65 + rows - i - 1
    for(let j = 0; j < i + 1; j++){
        strings += `${String.fromCharCode(alphabetNumber)} `
        alphabetNumber++
    }
    console.log(strings)
}

// practise for a job application
console.log("-----for job application-----")

// E 
// D E
// C D E
// B C D E
// A B C D E

let p = 5

for(let i = 0; i < p; i++){

    let row = ''
    for(let j = 0; j < i + 1; j++){
        row += `${String.fromCharCode(65 + p - j - 1)} `
    }
    console.log(row)
}


// ------------------ revision with js and go -------------------------

console.log("------------------ revision with js and go -------------------------")

// E 
// D E
// C D E
// B C D E
// A B C D E

let row = 5

for(let i = 0; i < row; i++){

    let char = ''
    let initial = row - i - 1
    for(let j = 0; j < i + 1; j++){
        char += `${String.fromCharCode(65 + initial)} `
        initial++
    }

    console.log(char)
}

