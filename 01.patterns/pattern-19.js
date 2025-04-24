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
