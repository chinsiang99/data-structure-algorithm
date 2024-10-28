// this will output this
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
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
    for(let j = 1; j <= i; j++){
        row += `${i} `
    }
    console.log(row)
}