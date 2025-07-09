// example pattern
// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// we can observe it as numbers, spaces, numbers also
// [1, 6, 1] the numbers basically is same as row = 1, the space can be 4 * 2 - 2* i
// [2, 4, 2] 
// [3, 2, 3]
// [4, 0, 4]

let n = 5
let cumulative = 1
for(let i = 0; i < n; i++){

    let print = ""
    for (let j = 0; j < i + 1; j++) {
        print += `${cumulative} `
        cumulative++;
    }
    console.log(print)
}

console.log("--- revision starts here ---")

// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let k = 5
let cumulativeNumber = 1
for(let i = 0; i < k; i++){
    let row = ""
    
    for(let j = 0; j < i + 1; j++){
        row += cumulativeNumber
        row += " "
        cumulativeNumber++
    }

    console.log(row)
}

// final revision
// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let rows = 5
let cumulativeNumbering = 1
for(let i = 0; i < rows; i++){
    let numbers = ''
    for(let j = 0; j < i + 1; j++){
        numbers += `${cumulativeNumbering} `
        cumulativeNumbering++
    }
    console.log(numbers)
}
