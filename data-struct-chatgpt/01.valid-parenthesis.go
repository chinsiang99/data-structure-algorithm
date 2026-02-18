package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello world")
	fmt.Println(isValidParentheses("()"))
	fmt.Println(isValidParentheses("()[]{}"))
	fmt.Println(isValidParentheses("(]"))
	fmt.Println(isValidParentheses("([)]"))
	fmt.Println(isValidParentheses("([]{})"))
	fmt.Println(isValidParentheses("([)]"))
	fmt.Println(isValidParentheses("{[}]"))
}

func isValidParentheses(word string) bool {
	// first we need to have a map to indicate which is which

	// mapping := make(map[string]string, 3) // use this when it is empty map
	mapping := map[string]string{
		"(": ")",
		"{": "}",
		"[": "]",
	}

	stack := make([]string, 0, len(word))

	for _, value := range word {
		_, found := mapping[string(value)]

		if !found {
			if len(stack) == 0 {
				return false
			}
			lastIndex := len(stack) - 1
			valueOfStack := stack[lastIndex]
			if mapping[valueOfStack] != string(value) {
				return false
			} else {
				stack = stack[:lastIndex]
			}
		} else {
			stack = append(stack, string(value))
		}
	}

	return len(stack) == 0

}

//  or we can make it to byte representation and we can actually use for i:=0 loop to loop through it
// for range loop will make it become runes instead
