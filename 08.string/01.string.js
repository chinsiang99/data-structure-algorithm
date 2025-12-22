// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

let strs = ["dog","racecar","car"]
let strs2 = ["flower","flow","flight"]

function longestCommonPrefixVerticalScanning(strs) {
  if (strs.length === 0) return "";

  // Take the first string as reference
  const first = strs[0];

  // Check each character position in the first string
  for (let i = 0; i < first.length; i++) {
    const ch = first[i];

    // Compare this character with the same position in all other strings
    for (let j = 1; j < strs.length; j++) {
      // If index is out of bound or character mismatch -> prefix ends here
      if (i >= strs[j].length || strs[j][i] !== ch) {
        return first.slice(0, i);
      }
    }
  }

  // If we never broke early, the whole first string is the prefix
  return first;
}

function solution(stringArray){
  if(stringArray.length === 0){
    return ""
  }

  // since we are going to compare right?
  // we will grab the first one as reference, and scan through them
  let reference = stringArray[0]
  for(let i = 0; i < reference.length; i++){
    for(let j = 1; j < stringArray.length; j++){
      if(reference[i] !== stringArray[j][i] || i >= stringArray[j].length){
        return reference.slice(0, i)
      }
    }
  }

  return reference

}

const result = longestCommonPrefixVerticalScanning(strs)
console.log(result, "this is 1")
const result2 = solution(strs)
console.log(result2, "this is 2")

const result3 = longestCommonPrefixVerticalScanning(strs2)
console.log(result3, "this is 3")
const result4 = solution(strs2)
console.log(result4, "this is 4")

// please note that wat I did is actually using horizontal scanning