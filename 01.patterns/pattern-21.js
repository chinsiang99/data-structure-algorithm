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
for(let i = 0; i < n; i++){
    let stars = ""
    for(let j = 0; j < n; j++){
        if(i === 0 || i === n - 1){
            stars += "*"
        }else{
            if(j === 0 || j === n - 1){
                stars += "*"
            }else{
                stars += " "
            }
        }
    }
    console.log(stars)
}