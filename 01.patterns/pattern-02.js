// this will output this
// *
// * *
// * * *
// * * * *
// * * * * *
let n = 5
for(let i = 0; i < n; i++){
    let row = ""
    // for(let j = 0; j < i + 1; j++){
    for(let j = 0; j <= i; j++){
        row += "*"
    }
    console.log(row)
}

console.log("--- revision starts here ---")

let k = 5
for(let i = 0; i < k; i++){
    let row = ""
    for(let j = 0; j < i + 1; j++){
        row += "* "
    }
    console.log(row)
}

// final revision

// this will output this
// *
// * *
// * * *
// * * * *
// * * * * *

let rows = 5
for(let i = 0; i < rows; i++){
    let stars = ''
    for(let j = 0; j < i + 1; j++){
        stars += '* '
    }
    console.log(stars)
}