// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"math"
)

func main() {

	// counting how many digits are there

	num := 7789
	count := 0

	fmt.Println("---------")
	for n := num; n > 0; n /= 10 {
		count++
	}
	fmt.Println(count)

	result := math.Floor(math.Log10(float64(num)))
	fmt.Println(result + 1)

	n := num
	if n < 0 {
		n = -n
	}

	count = 1
	for n >= 10 {
		n /= 10
		count++
	}
	fmt.Println(count)

}
