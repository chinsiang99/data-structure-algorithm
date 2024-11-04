# What is actually a recursion
Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem until it reaches a base case, which stops the recursive calls. It breaks down a complex problem into smaller, more manageable sub-problems that are often simpler to solve.

Key Parts of Recursion:
Base Case: This is the condition that stops the recursion. It prevents the function from calling itself indefinitely and provides a solution to the simplest possible version of the problem.
Recursive Case: This is where the function calls itself with a smaller or simpler argument, gradually moving closer to the base case with each call.
Example: Factorial Calculation

```javascript
function factorial(n) {
    // Base case: when n is 1, return 1
    if (n === 1) {
        return 1;
    }
    // Recursive case: multiply n by the factorial of (n - 1)
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```