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