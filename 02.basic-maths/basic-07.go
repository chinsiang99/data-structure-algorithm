// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
)

func main() {

	// prime numbers
	// prime number is a number that can only be divisible by itself and 1
	n := 3
	n2 := 6
	n3 := 4
	n4 := 32

	fmt.Println("---------")
	fmt.Println(greatestCommonFactor(n, n2))
	fmt.Println(greatestCommonFactor(n3, n4))
}

func greatestCommonFactor(number int, number2 int) int {
	result := 1
	for i := min(number, number2); i > 1; i-- {
		if number%i == 0 && number2%i == 0 {
			result = i
			break
		}
	}

	return result
}
