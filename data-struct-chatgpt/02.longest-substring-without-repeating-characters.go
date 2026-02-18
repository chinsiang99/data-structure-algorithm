/* Problem 2: Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring (contiguous) that contains no repeated characters.

Examples:

"abcabcbb" → 3 ( "abc" )

"bbbbb" → 1 ( "b" )

"pwwkew" → 3 ( "wke" )

"" → 0 */

package main

import "fmt"

func main() {
	fmt.Println(longestSubstringWithoutRepeatingCharacters("abcabcbb"))
	fmt.Println(longestSubstringWithoutRepeatingCharacters("abcadbcbb"))
	fmt.Println(longestSubstringWithoutRepeatingCharacters("bbbbbb"))
	fmt.Println(longestSubstringWithoutRepeatingCharacters("pwwkew"))
	fmt.Println(longestSubstringWithoutRepeatingCharacters("a"))
	fmt.Println(longestSubstringWithoutRepeatingCharacters("abba"))
}

func longestSubstringWithoutRepeatingCharacters(word string) int {
	// this is ok to be using byte if we assume it is actually for ascii only, but if it  include unicode such as emoji,
	// it will eventually break, and we should use for range instead, because it will give us rune
	mapping := make(map[byte]int)
	left := 0
	longest := 0

	for right := 0; right < len(word); right++ {
		value, found := mapping[word[right]]
		if found && value >= left {
			left = value + 1
		}
		mapping[word[right]] = right
		longest = max(longest, right-left+1)
	}

	return longest
}
