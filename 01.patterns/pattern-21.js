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