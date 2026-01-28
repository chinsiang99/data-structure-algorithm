// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"math"
)

func main() {

	// armstrong number problem
	// armstrong number is if you add individual number up with cube, then it will be the same number
	// example:
	// 371 = 3^3 + 7^3 + 1
	// 1634 != 1^3 + 6^3 + 3^3 + 4^3 (not an armstrong number)
	// 35 != 3^3 + 5^3 (not an armstrong number)

	n := 371
	n1 := 1634 // 1 + 216 + 27 + 64
	n2 := 35

	fmt.Println("---------")
	fmt.Println(isArmStroong(n))
	fmt.Println(isArmStroong(n1))
	fmt.Println(isArmStroong(n2))
}

func isArmStroong(number int) bool {
	copy := number
	result := 0
	remainder := 0
	for copy > 0 {
		remainder = copy % 10
		copy = copy / 10
		result = result + int(math.Pow(float64(remainder), 3))
	}
	return number == result
}
