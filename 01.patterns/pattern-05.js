// this will output this
// * * * * *
// * * * *
// * * *
// * *
// *

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
//         row += "* "
//     }
//     console.log(row)
// }
for(let i = 1; i <= n; i++){
    let row = ''
    for(let j = 0; j < n - i + 1; j++){
        row += "* "
    }
    console.log(row)
}

console.log("--- revision starts here ---")

// * * * * *
// * * * *
// * * *
// * *
// *

let k = 5
for(let i = 0; i < k; i++){
    let row = ""
    for(let j = 0; j < k - i; j++){
        row += "* "
    }
    console.log(row)
}

// final revision
// * * * * *
// * * * *
// * * *
// * *
// *
let rows = 5
for(let i = 0; i < rows; i++){
    let stars = ''
    for(let j = 0; j < rows - i; j++){
        stars += '* '
    }
    console.log(stars)
}


// practise for a job application
console.log("-----for job application-----")

// * * * * *
// * * * *
// * * *
// * *
// *

let p = 5

for(let i = 0; i < p; i++){
    let row = ''
    for(let j = 0; j < p - i; j++){
        row += `* `
    }
    console.log(row)
}

// ------------------ revision with js and go -------------------------

console.log("------------------ revision with js and go -------------------------")

// * * * * *
// * * * *
// * * *
// * *
// *

let row = 5

for(let i = 0; i < row; i++){
    let stars = ''
    for(let j = 0; j < row - i; j++){
        stars += '* '
    }
    console.log(stars)
}

