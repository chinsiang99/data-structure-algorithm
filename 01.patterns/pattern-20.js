// example pattern
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

let n = 5
for(let i = 0; i < 2 * n - 1; i++){
    if(i < 5 ){
        let stars = ""
        for(let j = 0; j < i + 1; j++){
            stars += "*"
        }
    
        let spaces = ""
        for(let j = 0; j < n - i - 1; j++){
            spaces += " "
        }
        console.log(stars + spaces + spaces + stars)
    }else{
        let stars = ""
        for(let j = 0; j < 2 * n - i - 1; j++){
            stars += "*"
        }

        let spaces = ""
        for(let j = 0; j < i - n + 1; j++){
            spaces += " "
        }

        console.log(stars + spaces + spaces + stars)
    }
}

console.log("--- revision starts here ---")

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

let k = 5

for(let i = 0; i < 2 * k - 1; i++){
    let stars = ""
    for(let j = 0; i < k ? j < i + 1 : j < 2 * k - i - 1; j++){
        stars += "*"
    }

    let space = ""
    for(let j = 0; i < k ? j < k - i - 1 : j < i - k + 1; j++){
        space += " "
    }

    console.log(stars + space + space + stars)
}


// final revision
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

let rows = 5
for(let i = 0; i < 2 * rows - 1; i++){
    let stars = ''
    let spaces = ''
    if(i < rows){
        for(let j = 0; j < i + 1; j++){
            stars += '* '
        }

        for(let j = 0; j < rows - i - 1; j++){
            spaces += '  '
        }
    }else{
        for(let j = 0; j < 2 * rows - i - 1; j++){
            stars += '* '
        }

        for(let j = 0; j < i - rows + 1; j++){
            spaces += '  '
        }
    }

    console.log(stars + spaces + spaces + stars)
}

// practise for a job application
console.log("-----for job application-----")

// *        *
// **      **
// ***    ***
// ****  ****
// ********** 4
// ****  **** 5 1
// ***    *** 6 2
// **      ** 7 3
// *        * 8 4

let p = 5

for(let i = 0; i < 2 * p - 1; i++){
    
    let space = ''
    let row = ''

    if(i < p){
        for(let j = 0; j < i + 1; j++){
            row += '*'
        }

        for(let j = 0; j < p - i - 1; j++){
            space += ' '
        }
    }else{
        for(let j = 0; j < 2 * p - i - 1; j++){
            row += '*'
        }

        for(let j = 0; j < i - p + 1; j++){
            space += ' '
        }
    }

    console.log(row + space + space + row)
}