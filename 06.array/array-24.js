// set matrix zeros
// meaning giving u a 2d matrix which contains 0 and 1
// we need to from the matrix that contains 0, we need to make horizontally and vertically become also 0

let matrix = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1]
]

function method1(matrix){
    let vertically = new Set()
    let horizontally = new Set()

    // here we have time complexity of n^2
    for(let i = 0;i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                horizontally.add(i)
                vertically.add(j)
            }
        }
    }

    // here we have time complexity of n^2
    for(let i = 0;i < matrix.length; i++){
        if(horizontally.has(i)){
            for(let j = 0; j < matrix[i].length; j++){
                matrix[i][j] = 0
            }
            continue;
        }

        for(let j = 0; j < matrix[i].length; j++){
            if(vertically.has(j))
            matrix[i][j] = 0
        }
    }
}
method1(matrix)
// for this method we can say that it has a time complexity of O(n^2)
console.log(matrix)

let matrix2 = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1]
]
// for this optimal approach, we are trying to reduce the space complexity, which use in place
function method2(matrix) {
    let col0 = 1;

    // Step 1: Use the first row and first column as markers
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // Mark the first column
                if (j !== 0) {
                    matrix[0][j] = 0; // Mark the first row
                } else {
                    col0 = 0; // Special case for the first column
                }
            }
        }
    }

    // Step 2: Zero out cells based on the markers in the first row and column
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 3: Zero out the first row if necessary
    if (matrix[0][0] === 0) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }

    // Step 4: Zero out the first column if necessary
    if (col0 === 0) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
}

method2(matrix2)

console.log(matrix2)

let matrix3 = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1]
]

function method3(matrix){
    let col = 1

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0 // marking the first column to 0

                if(j === 0){
                    col = 0
                }else{
                    matrix[0][j] = 0 // marking the first row to 0
                }
            }
        }
    }

    // Step 2: Zero out cells based on the markers in the first row and column
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 3: Zero out the first row if necessary
    if (matrix[0][0] === 0) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }

    // Step 4: Zero out the first column if necessary
    if (col === 0) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
}

method3(matrix3)

console.log(matrix3)


console.log("--- revision starts here ---")

matrix = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1]
]

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] === 0){
            for(let i = 0; i < matrix.length; i++){
                if(matrix[i][j] === 0){
                    continue
                }else{
                    matrix[i][j] = -1
                }
            }

            for(let k = 0; k < matrix[i].length; k++){
                if(matrix[i][k] === 0){
                    continue
                }else{
                    matrix[i][k] = -1
                }
            }
        }
    }
}

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] === -1){
            matrix[i][j] = 0
        }    
    }
}

// time complexity will be around n^3, I would say
console.log(matrix)

// a better solution, by using some space

matrix = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1]
]
let row = new Array(matrix.length).fill(1)
let column = new Array(matrix[0].length).fill(1)

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] === 0){
            row[i] = 0
            column[j] = 0
        }
    }
}

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        if(row[i] === 0 || column[j] === 0){
            matrix[i][j] = 0
        }
    }
}

console.log(matrix)