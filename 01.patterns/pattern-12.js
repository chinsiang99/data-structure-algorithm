// example pattern
// 0 
// 1 0
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0

// 1      1
// 12    21
// 123  321
// 12344321

// we can observe it as numbers, spaces, numbers also
// [1, 6, 1] the numbers basically is same as row = 1, the space can be 4 * 2 - 2* i
// [2, 4, 2] 
// [3, 2, 3]
// [4, 0, 4]

let n = 4
for(let i = 1; i <= n; i++){
    // console.log("hello there")
    let number1 = ""
    for(let j = 1; j <= i; j++){
        number1 = number1 + j + " "
    }

    let space = ""
    for(let j = 1; j <= n * 2 - 2 * i; j++){
        space = space + "  "
    }

    let number2 = ""
    for(let j = i; j >= 1; j--){
        number2 = number2 + j + " "
    }

    console.log(number1 + space + number2)
}