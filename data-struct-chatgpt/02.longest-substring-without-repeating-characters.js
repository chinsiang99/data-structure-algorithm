/* Problem 2: Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring (contiguous) that contains no repeated characters.

Examples:

"abcabcbb" → 3 ( "abc" )

"bbbbb" → 1 ( "b" )

"pwwkew" → 3 ( "wke" )

"" → 0 */

console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb"))
console.log(longestSubstringWithoutRepeatingCharacters("abcadbcbb"))
console.log(longestSubstringWithoutRepeatingCharacters("bbbbbb"))
console.log(longestSubstringWithoutRepeatingCharacters("pwwkew"))
console.log(longestSubstringWithoutRepeatingCharacters("a"))
console.log(longestSubstringWithoutRepeatingCharacters("abba"))

console.log("-------------------")

console.log(solutionRevised("abcabcbb"))
console.log(solutionRevised("abcadbcbb"))
console.log(solutionRevised("bbbbbb"))
console.log(solutionRevised("pwwkew"))
console.log(solutionRevised("a"))
console.log(solutionRevised("abba"))

function longestSubstringWithoutRepeatingCharacters(word){
    let largestLength = 0
    let leftPointer = 0
    let mapping = new Map()

    for(let right = 0; right < word.length; right++){
        if(mapping.has(word[right]) && mapping.get(word[right]) >= leftPointer){
            leftPointer = mapping.get(word[right]) + 1
        }
        mapping.set(word[right], right)
        largestLength = Math.max(largestLength, right - leftPointer + 1)
    }
    return largestLength
}

function solutionRevised(word){
    let mapping = new Map()
    let left = 0
    let longest = 0

    for(let right = 0; right < word.length; right++){
        if(mapping.has(word[right]) && mapping.get(word[right]) >= left){
            left = mapping.get(word[right]) + 1
        }
        mapping.set(word[right], right)
        longest = Math.max(longest, right - left + 1)
    }
    return longest
}