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

# Digit Counter Using Logarithm Base 10 in JavaScript

This README provides an example of using the `Math.log10` function in JavaScript to count the number of digits in a positive integer. This approach is based on the mathematical property of logarithms.

## Table of Contents

- [Introduction](#introduction)
- [Counting Digits with `Math.log10`](#counting-digits-with-mathlog10)
- [Example Calculation](#example-calculation)
- [Usage](#usage)
- [Notes](#notes)

## Introduction

The `Math.log10` function in JavaScript calculates the logarithm base 10 of a number. This function is useful for finding the number of digits in a positive integer, as it returns the exponent to which 10 must be raised to obtain the given number.

For example, `Math.log10(1000)` returns `3`, because \(10^3 = 1000\).

## Counting Digits with `Math.log10`

To count the number of digits in a positive integer `n`, follow these steps:

1. Calculate `Math.log10(n)`.
2. Take the integer part of the result using `Math.floor`.
3. Add 1 to get the number of digits.

The formula is as follows:

\[
\text{digits} = Math.floor(Math.log10(n)) + 1
\]

This formula works because an integer `n` with `d` digits satisfies the inequality:

\[
10^{d-1} \leq n < 10^d
\]

## Example Calculation

Consider the number `n = 12345`. To find the number of digits:

1. Calculate `Math.log10(12345)`, which is approximately `4.0915`.
2. Take the integer part: `4`.
3. Add `1` to get `5`.

Thus, `12345` has **5 digits**.

## Usage

Here's how you might implement this in JavaScript:

```javascript
function countDigits(n) {
  if (n <= 0) {
    throw new Error("Input must be a positive integer.");
  }
  return Math.floor(Math.log10(n)) + 1;
}

// Example
const number = 12345;
console.log(`The number ${number} has ${countDigits(number)} digits.`);
```