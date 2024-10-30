// example pattern
//         A
//       A B C
//     A B C D E
//   A B C D E F G
// A B C D E F G H I

let n = 5

for(let i = 0; i < n; i++){
    let space = ""
    for(let j = 0; j < n - i - 1; j++){
        space += "  "
    }

    let stars = ""
    let charCode = 65
    let starsCount = 2 * i + 1
    for(let j = 0; j < starsCount; j++){
        stars = stars + String.fromCharCode(charCode) + " "
        if(j >= i){
            charCode--
        }else{
            charCode++
        }
    }
    console.log(space + stars + space)
}