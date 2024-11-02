# Basic Math concepts

let's say we want to extract this digit
let n  = 7789

so if we want to digit by digit, we can actually get by modulus
n % 10, we can get 9, then 8, then 7, then 7 if we keep divide them then do the modulus again

example code:
```bash
let n = 7789

while(n > 0){
    let lastDigit = n % 10
    n = n / 10
    console.log(lastDigit)
}
```