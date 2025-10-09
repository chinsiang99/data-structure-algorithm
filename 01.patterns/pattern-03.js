// this will output this
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let n = 5
// for(let i = 0; i < n; i++){
//     let row = ""
//     // for(let j = 0; j < i + 1; j++){
//     for(let j = 0; j <= i; j++){
//         row += `${j+1} `
//     }
//     console.log(row)
// }
for(let i = 1; i <= n; i++){
    let row = ""
    // for(let j = 0; j < i + 1; j++){
    for(let j = 1; j <= i; j++){
        row += `${j} `
    }
    console.log(row)
}


console.log("--- revision starts here ---")

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let k = 5

for(let i = 0; i < k; i++){
    let row = ""
    for(let j = 0; j < i+1; j++){
        row += `${j+1} `
    }
    console.log(row)
}

// final revision

// this will output this
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let rows = 5
for(let i = 1; i <= rows; i++){
    let numbers = ''
    for(let j = 1; j <= i; j++){
        numbers += `${j} `
    }
    console.log(numbers)
}


// practise for a job application
console.log("-----for job application-----")

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let p = 5

for(let i = 0; i < p; i++){
    let number = 0
    let row = ''
    for(let j = 0; j < i+1; j++){
        number++
        row += `${number} `
    }
    console.log(row)
}

