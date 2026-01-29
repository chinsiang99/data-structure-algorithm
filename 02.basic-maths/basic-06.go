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
	n4 := 11

	fmt.Println("---------")
	fmt.Println(isPrime(n))
	fmt.Println(isPrime(n2))
	fmt.Println(isPrime(n3))
	fmt.Println(isPrime(n4))
}

func isPrime(number int) bool {
	for i := 2; i*i <= number; i++ {
		if number%i == 0 {
			return false
		}
	}
	return true
}
