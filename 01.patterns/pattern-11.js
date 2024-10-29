// example pattern
// 0 
// 1 0
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0

let n = 5
for(let i = 1; i <=n ; i++){
    let start
    if(i % 2 === 0){
        start = 1
    }else{
        start = 0
    }

    let row = ""
    for(let j = 1; j <= i; j++){
        row += start % 2 + " "
        start++
    }

    console.log(row)
}
// for(let i = 1; i <= 2*n-1; i++){
//     if(i <= n){
//         let stars = ""
//         for(let j = 1; j <= i; j++){
//             stars += "* "
//         }
//         console.log(stars)
//     }else{
//         let stars = ""
//         for(let k = 1; k <= 2 * n - i; k++){
//             stars += "* "
//         }
//         console.log(stars)
//     }
// }