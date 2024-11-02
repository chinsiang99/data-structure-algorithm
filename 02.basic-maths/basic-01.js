// counting how many digits are there

let n = 7789


function method1(n){
    let count = 0
    while(n > 0){
        count = count + 1
        n = Math.floor(n / 10)
    }
    return count
}

console.log(method1(n))

// now we will perform a more better way, which is using logarithm
// note that log10(x) = y => 10^y = x

function method2(n){
    return Math.floor((Math.log10(n) + 1))
}

console.log(method2(n))