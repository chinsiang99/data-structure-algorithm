let n = 5
// problem 1 => summation of n numbers
function problem1a(n, sum){
    if(n < 1){
        console.log(sum)
        return
    }
    problem1a(n-1, sum + n)
}

// time complexity is O(n), space complexity is O(n)
problem1a(n, 0)
