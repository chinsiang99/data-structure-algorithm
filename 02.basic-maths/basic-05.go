// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
)

func main() {

	// printing all divisors
	// meaning that for 36
	// we wil print out 1, 2, 3, 4, 6, 9, 12, 18, 36
	// which is 36 can be divisible by all the above without any remainder

	n := 371
	n1 := 1634 // 1 + 216 + 27 + 64
	n2 := 36

	fmt.Println("---------")
	printAllDivisors(n)
	printAllDivisors(n1)
	printAllDivisors(n2)
}

func printAllDivisors(number int) {
	var result []int
	var resultLarge []int
	for i := 1; i*i <= number; i++ {
		if number%i != 0 {
			continue
		}
		result = append(result, i)
		if number/i != i {
			resultLarge = append(resultLarge, number/i)
		}
	}

	for _, value := range result {
		fmt.Print(value, " ")
	}

	for i := len(resultLarge) - 1; i >= 0; i-- {
		fmt.Print(resultLarge[i], " ")
	}
	fmt.Println(" next ")
}
