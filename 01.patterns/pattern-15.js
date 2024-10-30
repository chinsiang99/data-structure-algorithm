// example pattern
// A B C D E
// A B C D
// A B C
// A B
// A

let n = 5

for(let i = 0; i < n; i++){
    let charCode = 65
    let print = ""
    for (let j = 0; j < n - i; j++) {
        print += `${String.fromCharCode(charCode)} `
        charCode++;
    }
    console.log(print)
}