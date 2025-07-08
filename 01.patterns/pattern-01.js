// this will output
// * * * *
// * * * *
// * * * *
// * * * *
let n = 4
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row);
}

console.log("--- revision starts here ---")

let k = 5

for(let i = 0; i < k; i++){
  let row = ""
  for(let j = 0; j < k; j++){
    row += "* "
  }
  console.log(row)
}

// time complexity will be O(n^2) because there is two loop


// final revision

// this will output
// * * * *
// * * * *
// * * * *
// * * * *

let star = 4

for(let i = 0; i < star; i++){
  let stars = ''

  for(let j = 0; j < star; j++){
    stars += '* '
  }

  console.log(stars)
}


