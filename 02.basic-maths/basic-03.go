// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
)

func main() {

	// palindrome problem
	// note that palindrome are the numbers for which reverse is exactly the same as the original number
	n := 1234
	n2 := 121
	n3 := 2222
	n4 := 992837

	fmt.Println("---------")
	fmt.Println(isPalindrome(n))
	fmt.Println(isPalindrome(n2))
	fmt.Println(isPalindrome(n3))
	fmt.Println(isPalindrome(n4))

}

func isPalindrome(number int) bool {
	copy := number
	result := 0
	remainder := 0
	for copy > 0 {
		remainder = copy % 10
		copy = copy / 10
		result = result*10 + remainder
	}
	return number == result
}
