// example pattern
// 0 
// 1 0
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0

let n = 5
for(let i = 1; i <=n ; i++){
    let start
    if(i % 2 === 0){
        start = 1
    }else{
        start = 0
    }

    let row = ""
    for(let j = 1; j <= i; j++){
        row += start % 2 + " "
        start++
    }

    console.log(row)
}

console.log("--- revision starts here ---")

// 0 
// 1 0
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0

let k = 5
for(let i = 0; i < k; i++){
    let row = ""
    let start = ""
    if(i % 2 === 0){
        start = 0
    }else{
        start = 1
    }

    for(let j = 0; j < i + 1; j++){
        row += `${start % 2} `
        start++
    }
    console.log(row)
}

// final revision

// 0 
// 1 0
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0

let rows = 5
for(let i = 0; i < rows; i++){

    let start = 0

    if(i % 2 !== 0){
        start = 1
    }

    let numbers = ''
    for(let j = 0; j < i + 1; j++){
        numbers += `${start} `
        start ^= 1
    }

    console.log(numbers)
}

// practise for a job application
console.log("-----for job application-----")

// 0 
// 1 0
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0

for(let i = 1; i <= 5; i++){
    let start = 1
    if(i % 2 === 1){
        start = 0
    }

    let row = ''
    for(let j = 0; j < i; j++){
        row += `${start} `
        start ^= 1
    }

    console.log(row)
}

// ------------------ revision with js and go -------------------------

console.log("------------------ revision with js and go -------------------------")

// 0 
// 1 0
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0

let row = 5

for(let i = 1; i <= row; i++){
    let start = 0
    if(i % 2 === 0){
        start = 1
    }
    let resultLine = ''
    for(let j = 0; j < i; j++){
        resultLine += `${start} `
        start = start ^ 1
    }
    console.log(resultLine)
}