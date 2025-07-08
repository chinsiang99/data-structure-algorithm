// example pattern
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// we can observe that it is
// 1 , 2, 3, 4, 5, 4, 3, 2, 1
// it actually has symmetric pattern because there is a place where is different, which is 5

let n = 5
for(let i = 1; i <= 2*n-1; i++){
    if(i <= n){
        let stars = ""
        for(let j = 1; j <= i; j++){
            stars += "* "
        }
        console.log(stars)
    }else{
        let stars = ""
        for(let k = 1; k <= 2 * n - i; k++){
            stars += "* "
        }
        console.log(stars)
    }
}

console.log("--- revision starts here ---")

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

let k = 5
for(let i = 0; i < 2 * k - 1; i++){
    if(i < k){
        let stars = ""
        for(let j = 0; j < i + 1; j++){
            stars += "* "
        }
        console.log(stars)
    }else{
        let stars = ""
        for(let j = 0; j < 2 * k - i - 1; j++){
            stars += "* "
        }
        console.log(stars)
    }
}

// final revision
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
let rows = 4
for(let i = 0; i < 2 * n + 1; i++){
    let stars = ''
    if(i <= 4){
        for(let j = 0; j < i + 1; j++){
            stars += '* '
        }
    }else{
        for(let j = 0; j < 2 * n + 1 - i; j++){
            stars += '* '
        }
    }
    console.log(stars)
}

rows = 5

for(let i = 1; i <= 2 * rows - 1; i++){
    let starsCount = i
    if(i > rows){
        starsCount = 2 * rows - i
    }
    let stars = ''
    for(let j = 0; j < starsCount; j++){
        stars += '* '
    }
    console.log(stars)
}