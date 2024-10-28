// this will output this
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

// we can actually see the pattern here.. 
// [4, 1, 4]
// [3, 3, 3]
// [2, 5, 2]
// [1, 7, 1]
// [0, 9, 0]
// for conection with rows from column
// we can see that there is actually reverse of it, which is n - i - 1 for spaces
// we can see that for the stars it is actually 2 * i + 1

let n = 5
for(let i = 0; i < n; i++){
    let space1 = ""
    let stars = ""
    let space2 = ""

    for(let j = 0; j < n - i - 1; j++){
        space1 += "  "
        space2 += "  "
    }

    for(let k = 0; k < 2 * i + 1; k++){
        stars += "* "
    }

    console.log(space1 + stars + space2)
}