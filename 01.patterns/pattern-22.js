// example pattern
// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444


// we can view it as a matrix
// n - currentValue = newMatrix
// therefore, if we want to have current value, we will need
// n - newMatrix = currentValue

// new matrix example (derived from n - original - individual values)
// 0000000
// 0111110
// 0122210
// 0123210
// 0122210
// 0111110
// 0000000


let n = 4

for(let i = 0; i < 2 * n - 1; i++){
    let newValueToBePrinted = ""
    for(let j = 0; j < 2 * n - 1; j++){
        let toRight = 2 * n - 1 - 1 - j
        let toLeft = j
        let toTop = i
        let toBottom = 2 * n - 1 - 1 - i
        newmatrixSingleValue = Math.min(toRight, toLeft, toTop, toBottom)
        newValueToBePrinted += newmatrixSingleValue
    }
    console.log(newValueToBePrinted)
}

console.log("--- revision starts here ---")

// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444

let k = 4
for(let i = 0; i < 2 * k - 1; i++){
    let row = ""
    for(let j = 0; j < 2 * k - 1; j++){
        let left = j
        let right = 2 * k - 1 - j - 1
        let top = i
        let bottom = 2 * k - 1 - i - 1
        row += k - Math.min(left, right, top, bottom)
        // if we want to get the new matrix of distance
        // row += Math.min(left, right, top, bottom)
    }
    console.log(row)
}

// final revision

// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444
console.log("final revision")

let rows = 4
for(let i = 0; i < 2 * rows - 1; i++){
    let numbers = ''
    for(let j = 0; j < 2 * rows - 1; j++){
        let left = j
        let right = 2 * rows - 1 - j - 1
        let top = i
        let bottom = 2 * rows - 1 - i - 1

        numbers += `${rows - Math.min(left, right, top, bottom)}`
    }
    console.log(numbers)
}


// practise for a job application
console.log("-----for job application-----")

// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444

let p = 4

for(let i = 0; i < 2 * p - 1; i++){
    let row = ''
    for(let j = 0; j < 2 * p - 1; j++){
        let left = j
        let right = 2 * p - 1 - j - 1
        let top = i
        let bottom = 2 * p - 1 - i - 1
        let diff = Math.min(left, right, top, bottom)
        row += `${p - diff}`
    }
    console.log(row)
}
