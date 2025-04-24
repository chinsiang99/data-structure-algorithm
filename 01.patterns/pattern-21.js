// example pattern
// *****
// *   *
// *   *
// *   *
// *****

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


// *****
// *   *
// *   *
// *   *
// *****

console.log("--- revision starts here ---")

let k = 5
for(let i = 0; i < k; i++){
    let row = ""
    for(let j = 0; j < k; j++){
        if(i === 0 || i === k - 1){
            row += "*"
        }else{
            if(j === 0 || j === k - 1){
                row += "*"
            }else{
                row += " "
            }
        }
    }
    console.log(row)
}