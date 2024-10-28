// this will output this
// * * * * * * * * * 
//   * * * * * * *
//     * * * * *
//       * * *
//         *

// we can actually see the pattern here.. 
// [0, 9, 0]
// [1, 7, 1]
// [2, 5, 2]
// [3, 3, 3]
// [4, 1, 4]
// for conection with rows from column
// we can see that there is actually reverse of it, which is basically n for spaces
// we can see that for the stars it is actually 2 * n - (2i+1)

let n = 5
for(let i = 0; i < n; i++){
    let stars = ""
    let space1 = ""
    let space2 = ""
    for(let j = 0; j < 2*n - (2*i + 1); j++){
        stars += "* "
    }

    for(let j = 0; j < i; j++ ){
        space1 += "  "
        space2 += "  "
    }

    console.log(space1 + stars + space2)
}