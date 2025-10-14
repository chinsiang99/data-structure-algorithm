// example pattern
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

let n = 5
for(let i = 0; i < n; i++){
    let stars = ""
    for(let j = 0; j < n - i; j++){
        stars += "*"
    }

    let space = ""
    for(let j = 0; j < 2 * i; j++){
        space = space + " "
    }

    console.log(stars + space + stars)
}

for(let i = 0; i < n; i++){
    let stars = ""
    for(let j = 0; j < i + 1; j++){
        stars += "*"
    }

    let space = ""
    for(let j = 0; j < 2 * n - 2 * (i+1); j++){
        space = space + " "
    }

    console.log(stars + space + stars)
}

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

console.log("--- revision starts here ---")

let k = 5
for(let i = 0; i < 2 * k; i++){
    let star = ""
    for(let j = 0; i < k ? j < k - i : j < i - k + 1; j++){
        star += "*"
    }

    let space = ""
    for(let j = 0; i < k ? j < 2 * i : j < 2 * ((2 * k) - i - 1); j++){
        space += " "
    }

    console.log(star + space + star)
}


// final revision
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

let rows = 5
for(let i = 0; i < rows; i++){
    let stars = ''
    for(let j = 0; j < rows - i; j++){
        stars += '* '
    }

    let spaces = ''
    for(let j = 0; j < 2 * i; j++){
        spaces += '  '
    }
    console.log(stars + spaces + stars)
}

for(let i = 0; i < rows; i++){
    let stars = ''
    for(let j = 0; j < i + 1; j++){
        stars += '* '
    }
    let spaces = ''
    for(let j = 0; j < 2 * n - 2 * (i + 1); j++){
        spaces += '  '
    }
    console.log(stars + spaces + stars)
}


// practise for a job application
console.log("-----for job application-----")

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

let p = 5

for(let i = 0; i < p; i++){

    let space = ''
    let row = ''

    for(let j = 0; j < p - i; j++){
        row += '*'
    }

    for(let j = 0; j < i; j++){
        space += ' '
    }
    console.log(row + space + space + row)
}

for(let i = 0; i < p; i++){

    let row = ''
    let space = ''
    for(let j = 0; j < i + 1; j++){
        row += '*'
    }

    for(let j = 0; j < p - i - 1; j++){
        space += ' '
    }
    console.log(row + space + space + row)
}
