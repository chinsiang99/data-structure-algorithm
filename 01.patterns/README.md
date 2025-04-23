# Patterns (nested loops) - for starting off with dsa questions

This folder will contain all the common patterns (working with arrays and loops)

example:
```bash
****
****
****
****
```

Steps to working with nested loops questions:
1) for the outer loops, count the number of lines (rows)
2) for the inner loops, count the number of columns & somehow connect them to the rows
3) print the things inside the inner for loops
4) observing symmetry (optional)
```bash
for(let i = 0; i < 4; i++){
    let row = ""
    for(let j = 0; j < 4; j++){
        row = row + "*"
    }
    console.log("*")
}
```


stopped at pattern 15