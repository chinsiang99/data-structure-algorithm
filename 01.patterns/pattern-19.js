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