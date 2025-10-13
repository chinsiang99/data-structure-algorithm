// example pattern
//         A
//       A B C
//     A B C D E
//   A B C D E F G
// A B C D E F G H I

let n = 5

for(let i = 0; i < n; i++){
    let space = ""
    for(let j = 0; j < n - i - 1; j++){
        space += "  "
    }

    let stars = ""
    let charCode = 65
    let starsCount = 2 * i + 1
    for(let j = 0; j < starsCount; j++){
        stars = stars + String.fromCharCode(charCode) + " "
        if(j >= i){
            charCode--
        }else{
            charCode++
        }
    }
    console.log(space + stars + space)
}


console.log("--- revision starts here ---")

//         A
//       A B C
//     A B C D E
//   A B C D E F G
// A B C D E F G H I

let k = 5
for(let i = 0; i < k; i++){
    let space = ""
    for(let j = 0; j < k - i - 1; j++){
        space += "  "
    }

    let alphabet = ""
    for(let j = 0; j < 2 * i + 1; j++){
        alphabet += `${String.fromCharCode(65 + j)} `
    }

    console.log(space + alphabet)
}

console.log("--- revision starts here, another pattern ---")

//    A
//  A B A       
//A B C B A

for(let i = 0; i < k; i++){
    let space = ""
    for(let j = 0; j < k - i - 1; j++){
        space += "  "
    }

    let alphabet = ""
    let runningNumber = 65
    for(let j = 0; j < 2 * i + 1; j++){
        alphabet += `${String.fromCharCode(runningNumber)} `
        if(j >= i){
            runningNumber--
        }else{
            runningNumber++
        }
    }

    console.log(space + alphabet)
}

// final revision
//    A
//  A B A       
//A B C B A

let rows = 10
for(let i = 0; i < rows; i ++){
    let strings = ''
    let spaces = ''

    let initial = 65
    for(let j = 0; j < 2 * i + 1; j++){
        if(j >= i){
            strings += `${String.fromCharCode(initial)} `
            initial--
        }else{
            strings += `${String.fromCharCode(initial)} `
            initial++
        }
    }

    for(let j = 0; j < rows - i - 1; j++){
        spaces += '  '
    }
    console.log(spaces + strings)
}

// practise for a job application
console.log("-----for job application-----")

//    A
//  A B A       
//A B C B A

let p = 10
for(let i = 0; i < p; i++){

    let space = ''
    let row = ''
    for(let j = 0; j < p - i - 1; j++){
        space += '  '
    }

    let initial = 0
    for(let j = 0; j < 2 * i + 1; j++){
        if(j >= i){
            row += `${String.fromCharCode(65 + initial)} `
            initial--
        }else{
            row += `${String.fromCharCode(65 + initial)} `
            initial++
        }
    }
    console.log(space + row)
}
