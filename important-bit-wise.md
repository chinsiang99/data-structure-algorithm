# Guide to Bitwise Operations in Programming

## **Overview**
Bitwise operations are powerful tools in programming that allow you to directly manipulate individual bits of data. They can be leveraged to solve algorithmic and data structure problems efficiently.

---

## **1. Basics of Bitwise Operations**

### **Key Bitwise Operators**
1. **AND (`&`)**:
   - Compares each bit of two numbers. If both bits are `1`, the result is `1`; otherwise, it's `0`.
   - Example:
     ```
     5 & 3 = 0101 & 0011 = 0001 = 1
     ```

2. **OR (`|`)**:
   - Compares each bit of two numbers. If either bit is `1`, the result is `1`.
   - Example:
     ```
     5 | 3 = 0101 | 0011 = 0111 = 7
     ```

3. **XOR (`^`)**:
   - Compares each bit of two numbers. If the bits are different, the result is `1`; otherwise, it's `0`.
   - Example:
     ```
     5 ^ 3 = 0101 ^ 0011 = 0110 = 6
     ```

4. **NOT (`~`)**:
   - Inverts all bits of the number.
   - Example:
     ```
     ~5 = ~0101 = 1010 (binary, in two’s complement becomes -6)
     ```

5. **Left Shift (`<<`)**:
   - Shifts the bits of the number to the left by a specified number of positions, filling in with `0`s.
   - Example:
     ```
     5 << 1 = 0101 << 1 = 1010 = 10
     ```

6. **Right Shift (`>>`)**:
   - Shifts the bits of the number to the right, filling in with the sign bit for signed numbers or `0` for unsigned numbers.
   - Example:
     ```
     5 >> 1 = 0101 >> 1 = 0010 = 2
     ```

---

## **2. Applications of Bitwise Operations**

### **1. Toggle, Set, and Clear Specific Bits**
- **Toggle a Bit**: Use XOR with `1` to flip a specific bit.
  ```javascript
  let num = 5;
  num ^= (1 << 2); // Toggles the 2nd bit
  ```

- **Set a Bit**: Use OR to set a specific bit to `1`.
  ```javascript
  let num = 5;
  num |= (1 << 2); // Sets the 2nd bit
  ```

- **Clear a Bit**: Use AND with the complement to clear a specific bit.
  ```javascript
  let num = 7;
  num &= ~(1 << 2); // Clears the 2nd bit
  ```

---

### **2. Count Set Bits**
Count the number of `1`s in the binary representation of a number:
```javascript
function countSetBits(n) {
    let count = 0;
    while (n) {
        count += n & 1; // Add the last bit
        n >>= 1;        // Shift right
    }
    return count;
}
```

---

### **3. Detect Power of Two**
A number is a power of two if it has exactly one bit set:
```javascript
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
```

---

### **4. Find the Single Number in an Array**
In an array where every number appears twice except one, XOR all elements. The result will be the single number (pairs cancel out):
```javascript
function findSingle(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num;
    }
    return result;
}
```

---

### **5. Subset Generation**
Use bit masking to generate all subsets of a set:
```javascript
function generateSubsets(nums) {
    let subsets = [];
    let n = nums.length;
    for (let mask = 0; mask < (1 << n); mask++) {
        let subset = [];
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                subset.push(nums[i]);
            }
        }
        subsets.push(subset);
    }
    return subsets;
}
```

---

### **6. Swap Numbers Without a Temp Variable**
Use XOR to swap two numbers:
```javascript
let a = 5, b = 3;
a = a ^ b;
b = a ^ b; // b becomes original a
a = a ^ b; // a becomes original b;
```

---

### **7. Find Missing and Repeating Numbers**
Use XOR to find missing and repeating numbers in an array. XOR all numbers in the array and from `1` to `n`:
```javascript
function findMissingAndRepeating(arr, n) {
    let xorAll = 0;
    for (let num of arr) xorAll ^= num;
    for (let i = 1; i <= n; i++) xorAll ^= i;

    let rightmostBit = xorAll & -xorAll;
    let missing = 0, repeating = 0;
    for (let num of arr) {
        if (num & rightmostBit) missing ^= num;
        else repeating ^= num;
    }
    for (let i = 1; i <= n; i++) {
        if (i & rightmostBit) missing ^= i;
        else repeating ^= i;
    }

    return [missing, repeating];
}
```

---

### **8. Fast Multiplication or Division by Powers of 2**
Use left shift (`<<`) to multiply by `2^k` and right shift (`>>`) to divide by `2^k`:
```javascript
let num = 5;
console.log(num << 1); // Multiply by 2 (10)
console.log(num >> 1); // Divide by 2 (2)

let num = 5;
console.log(num << 2); // Multiply by 4 (2^2)
```

---

### **9. Compress Boolean States**
Use individual bits of a number to store multiple boolean values compactly:
```javascript
let states = 0;       // All off
states |= (1 << 2);   // Turn on the 2nd state
states |= (1 << 4);   // Turn on the 4th state
states &= ~(1 << 2);  // Turn off the 2nd state
console.log(states);  // 16 (binary: 10000)
```

---

## **3. Why Use Bitwise Operations?**
- **Efficiency**: Faster than loops or arithmetic for certain tasks.
- **Compactness**: Use less memory by manipulating bits directly.
- **Versatility**: Solve problems like toggling states, generating subsets, and optimizing tasks.

---

By mastering bitwise operations, you can solve problems efficiently and gain deeper insights into how data is represented and manipulated at the binary level.

