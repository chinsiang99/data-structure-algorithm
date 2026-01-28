// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
)

func main() {

	// reverse a number
	num := 7789
	result := 0

	fmt.Println("---------")
	for num > 0 {
		remainder := num % 10
		result = result*10 + remainder
		num = num / 10
	}
	fmt.Println(result)

}
