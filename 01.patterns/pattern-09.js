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

// note that we are not viewing this as symmetric because basically there is no difference, it is up side down, hence we can just use two for loops to do it..

console.log("--- revision starts here ---")

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

let k = 5
for(let i = 0; i < k; i++){
    let space = ""
    for(let j = 0; j < k - i - 1; j++){
        space += "  "
    }

    let stars = ""
    for(let j = 0; j < 2 * i + 1; j++){
        stars += "* "
    }
    console.log(space + stars)
}

for(let i = 0; i < k; i++){
    let space = ""
    for(let j = 0; j < i; j++){
        space += "  "
    }
    
    let stars = ""
    for(let j = 0; j < 2 * k - 2 * i - 1; j++){
        stars += "* "
    }
    console.log(space + stars)
}

// final revision
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

let rows = 5
for(let i = 0; i < rows; i++){
    let space = ''
    for(let j = 0; j < rows - i - 1; j++){
        space += '  '
    }

    let stars = ''
    for(let j = 0; j < 2 * i + 1; j++){
        stars += '* '
    }
    console.log(space + stars)
}


for(let i = 0; i < rows; i++){
    let space = ''
    for(let j = 0; j < i; j++){
        space += '  '
    }

    let stars = ''
    for(let j = 0; j < 2 * rows - (2 * i + 1); j++){
        stars += '* '
    }

    console.log(space + stars)
}

// practise for a job application
console.log("-----for job application-----")

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
// * * * * * * * * *.      9, 7, 5, 3, 1 2 * p - 1, 2 * p - 3
//   * * * * * * *
//     * * * * *
//       * * *
//         *

let p = 5

for(let i = 1; i <= p; i++){
    let space = ''
    for(let j = 0; j < p - i; j++){
        space += '  '
    }

    let stars = ''
    for(let j = 0; j < 2 * i - 1; j++){
        stars += '* '
    }
    console.log(space + stars)
}


for(let i = 1; i <= p; i++){
    let space = ''
    for(let j = 1; j < i; j++){
        space += '  '
    }

    let stars = ''
    for(let j = 0; j < 2 * p - (2 * i) + 1; j++){
        stars += '* '
    }
    console.log(space + stars)
}




// ------------------ revision with js and go -------------------------

console.log("------------------ revision with js and go -------------------------")

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
// * * * * * * * * *.      9, 7, 5, 3, 1 2 * p - 1, 2 * p - 3
//   * * * * * * *
//     * * * * *
//       * * *
//         *

// 4 1
// 3 3 
// 2 5  
// 1 7
// 0 9 

let row = 5

for(let i = 0; i < row; i++){
    let space = ''
    for(let j = 0; j < row - i - 1; j++){
        space += '  '
    }

    let stars = ''
    for(let j = 0; j < 2 * i + 1; j++){
        stars += '* '
    }
    console.log(space + stars)
}

for(let i = 0; i < row; i++){
    let space = ''
    for(let j = 0; j < i; j++){
        space += '  '
    }

    let stars = ''
    for(let j = 0; j < 2 * row - (2 * i + 1); j++){
        stars += '* '
    }
    console.log(space + stars)
}