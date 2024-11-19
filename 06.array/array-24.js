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