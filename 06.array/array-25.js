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
    const rows = rows;
    const cols = cols;
    const twoDimArray = Array.from({ length: rows }, () => Array(cols).fill(0));
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j <matrix[i].length; j++){
            twoDimArray[j][n - i - 1] = matrix[i][j]
        }
    }

    return twoDimArray
}

// time complexity is O(n^2) + O(n^2), space complexity is O(n^2)
console.log(method1(matrix, 4, 4))