// rotate matrix/image by 90 degrees

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

// brute force
// we can observe that if we rotate clock wise, we will get something like this
// [13, 9, 5, 1],
// [14, 10, 6, 2],
// [15, 11, 7, 3],
// [16, 12, 8, 4]
// we can say that first row will be basically [i][3]

function method1(matrix, cols, rows){
    const row = rows;
    const col = cols;
    const twoDimArray = Array.from({ length: row }, () => Array(col).fill(0));
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j <matrix[i].length; j++){
            twoDimArray[j][col - i - 1] = matrix[i][j]
        }
    }

    return twoDimArray
}

// time complexity is O(n^2) + O(n^2), space complexity is O(n^2)
console.log(method1(matrix, 4, 4))

// this is another method which is using transpose
// lets observe it
// we can see that in order to get the result
// [13, 9, 5, 1],
// [14, 10, 6, 2],
// [15, 11, 7, 3],
// [16, 12, 8, 4]
// it is actually from the original matrix, the first column will become the first row, but reversed
// and we can see that all 0, 0, should remain the same before reverse the array
// therefore we can say that we have a new idea on it, we try to see the pattern first, how should we do it before the reverse
// refer to idea-matrix-90-degree.png

let matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

function method2(matrix, cols, rows){
    for(let i = 0; i < rows - 1; i++){
        for(let j = i + 1; j < cols; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    console.log(matrix)

    for(let i = 0; i < rows; i++){
        let left = 0
        let right = matrix[i].length - 1
        while (left < right) {
            [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
            left++;
            right--;
        }
    }
}

// time complexity is O(2n^2), space complexity is none because we did not introduce new space to store anything 
method2(matrix2, 4, 4)

console.log(matrix2)