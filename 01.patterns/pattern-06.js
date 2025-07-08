// this will output this
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// we can see that
// row 1 has 5
// row 2 has 4
// row 3 has 3
// row 4 has 2
// row 5 has 1
// there is a connection where row = n - row + 1
// 5 - 4 + 1 = 5, 5 - 2 + 1 = 4

let n = 5
// for(let i = 0; i < n; i++){
//     let row = ''
//     for(let j = 0; j < n - i; j++){
//         row += `${j+1} `
//     }
//     console.log(row)
// }
for(let i = 1; i <= n; i++){
    let row = ''
    for(let j = 0; j < n - i + 1; j++){
        row += `${j + 1} `
    }
    console.log(row)
}

console.log("--- revision starts here ---")

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let k = 5
for(let i = 0; i < k; i++){
    let row = ""
    for(let j = 0; j < k - i; j++){
        row += `${j + 1} `
    }
    console.log(row)
}

// final revision

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let rows = 5

for(let i = 0; i < rows; i++){
    let numbers = ''
    for(let j = 0; j < rows - i; j++){
        numbers += `${j + 1} `
    }
    console.log(numbers)
}