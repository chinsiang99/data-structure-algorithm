// example pattern
// E 
// D E
// C D E
// B C D E
// A B C D E

let n = 5

for(let i = 0; i < n; i++){

    let charCode = 65 + n - (i + 1)
    let print = ""
    for(let j = 0; j < i + 1; j++){
        print += String.fromCharCode(charCode) + " "
        charCode++
    }
    console.log(print)
}

console.log("--- revision starts here ---")

// E 
// D E
// C D E
// B C D E
// A B C D E

let k = 5
for(let i = 0; i < k; i++){
    let runningNumber = 65 + k - i - 1
    let alphabet = ""
    for(let j = 0; j < i+1; j++){
        alphabet += `${String.fromCharCode(runningNumber)} `
        runningNumber++
    }
    console.log(alphabet)
}