// example pattern
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

let n = 5
for(let i = 0; i < 2 * n - 1; i++){
    if(i < 5 ){
        let stars = ""
        for(let j = 0; j < i + 1; j++){
            stars += "*"
        }
    
        let spaces = ""
        for(let j = 0; j < n - i - 1; j++){
            spaces += " "
        }
        console.log(stars + spaces + spaces + stars)
    }else{
        let stars = ""
        for(let j = 0; j < 2 * n - i - 1; j++){
            stars += "*"
        }

        let spaces = ""
        for(let j = 0; j < i - n + 1; j++){
            spaces += " "
        }

        console.log(stars + spaces + spaces + stars)
    }
}