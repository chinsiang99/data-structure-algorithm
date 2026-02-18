/* Problem: Valid Parentheses
Given a string s containing only the characters ()[]{}, return true if it’s valid:

Open brackets must be closed by the same type

Closed in the correct order

Every close has a matching open

Examples:

s = "()" → true

s = "()[]{}" → true

s = "(]" → false

s = "([)]" → false */

function isValidParentheses(word){
    let map = new Map([["(", ")"], ["[", "]"], ["{", "}"]])
    let stack = []
    if(word.length % 2 !== 0){
        return false
    }
    for(let i = 0; i < word.length; i++){
        if(map.has(word[i])){
            stack.push(word[i])
        }else if(stack.length === 0){
            return false
        }else{
            let comparable = stack.pop()
            if(map.get(comparable) !== word[i]){
                return false
            }
        }
    }
    return stack.length === 0
    // console.log(map, "this is the mapping")
}

console.log(isValidParentheses("()"))
console.log(isValidParentheses("()[]{}"))
console.log(isValidParentheses("(]"))
console.log(isValidParentheses("([)]"))
console.log(isValidParentheses("([]{})"))
console.log(isValidParentheses("([)]"))
console.log(isValidParentheses("{[}]"))