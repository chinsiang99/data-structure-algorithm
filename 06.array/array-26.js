// spiral matrix
// print them in spiral way
// this has onlyone solution
// purpose of this is to test the implementation
// and also see how clean you code can be

let matrix = [
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
]

function method(matrix){
    let n = matrix.length
    let m = matrix[0].length
    let left = 0
    let right = m - 1
    let top = 0
    let bottom = n - 1

    let returnArray = []

    while(top <= bottom && left <= right){
        for(let i = 0; i <= right; i++){
            returnArray.push(matrix[top][i])
        }
        top++
    
        for(let i = top; i <= bottom; i++){
            returnArray.push(matrix[i][right])
        }
        right--
    
        if(top <= bottom){
            for(let i = right; i >= left; i--){
                returnArray.push(matrix[bottom][i])
            }
            bottom--
        }

        if(left <= right){
            for(let i = bottom; i >= top; i--){
                returnArray.push(matrix[i][left])
            }
            left++
        }
    }

    // time complexity will be O(n * m)
    console.log(returnArray)
}

method(matrix)