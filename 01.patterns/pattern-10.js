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