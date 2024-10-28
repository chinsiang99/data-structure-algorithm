// this will output this
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
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

// [4, 1, 4]
// [3, 3, 3]
// [2, 5, 2]
// [1, 7, 1]
// [0, 9, 0]
// for conection with rows from column
// we can see that there is actually reverse of it, which is basically n for spaces
// we can see that for the stars it is actually 2 * n - (2i+1)

let n = 5
for(let i = 0; i < n; i++){
    let spaces = ""
    let stars = ""
    for(let j = 0; j < n - i - 1; j++){
        spaces += "  "
    }

    for(let j = 0; j < 2 * i + 1; j++){
        stars += "* "
    }

    console.log(spaces + stars + spaces)
}

// [0, 9, 0]
// [1, 7, 1]
// [2, 5, 2]
// [3, 3, 3]
// [4, 1, 4]
for(let i = 0; i < n; i++){
    let spaces = ""
    let stars = ""
    for(let j = 0; j < i; j++){
        spaces += "  "
    }

    for(let j = 0; j < 2 * n - (2 * i + 1); j++){
        stars += "* "
    }

    console.log(spaces + stars + spaces)
}