// example pattern
// *****
// *   *
// *   *
// *   *
// *****

let n = 5
for(let i = 0; i < n; i++){
    let stars = ""
    for(let j = 0; j < n; j++){
        // if(i === 0 || i === n - 1){
        //     stars += "*"
        // }else{
        //     if(j === 0 || j === n - 1){
        //         stars += "*"
        //     }else{
        //         stars += " "
        //     }
        // }
        if(i === 0 || i === n - 1 || j === 0 || j === n - 1){
            stars += "*"
        }else{
            stars += " "
        }
    }
    console.log(stars)
}


// *****
// *   *
// *   *
// *   *
// *****

console.log("--- revision starts here ---")

let k = 5
for(let i = 0; i < k; i++){
    let row = ""
    for(let j = 0; j < k; j++){
        if(i === 0 || i === k - 1){
            row += "*"
        }else{
            if(j === 0 || j === k - 1){
                row += "*"
            }else{
                row += " "
            }
        }
    }
    console.log(row)
}


// final revision
// *****
// *   *
// *   *
// *   *
// *****

let rows = 5
for(let i = 0; i < rows; i++){
    let spaces = ''
    for(let j = 0; j < rows - 2; j++){
        spaces += '  '
    }
    let stars = ''
    if(i === 0 || i === rows - 1){
        for(let j = 0; j < rows; j++){
            stars += '* '
        }
        console.log(stars)
    }else{
        stars = '* '
        console.log(stars + spaces + stars)
    }
}

// practise for a job application
console.log("-----for job application-----")

// *****
// *   *
// *   *
// *   *
// *****

let p = 5

for(let i = 0; i < p; i++){
    let row = ''
    if(i === 0 || i === p - 1){
        for(let j = 0; j < p; j++){
            row += '*'
        }
    }else{
        for(let j = 0; j < p; j++){
            row += j === 0 || j === p - 1 ? `*` : ` `
        }
    }
    console.log(row)
}


// ------------------ revision with js and go -------------------------

console.log("------------------ revision with js and go -------------------------")


// *****
// *   *
// *   *
// *   *
// *****

let row = 5

for(let i = 0; i < row; i ++){
    let char = ''
    let space = ''
    for(let j = 0; j < row - 2; j++){
        space += ' '
    }
    if(i === 0 || i === row - 1){
        for(let j = 0; j < row; j++){
            char += '*'
        }
        console.log(char)
        continue
    }

    char += '*'
    console.log(char + space + char)
}