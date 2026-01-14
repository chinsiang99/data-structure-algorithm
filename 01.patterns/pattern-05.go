// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"strings"
)

// * * * * *
// * * * *
// * * *
// * *
// *

func main() {
	p := 5

	for i := 0; i < p; i++ {
		result := strings.Repeat("* ", p-i)
		fmt.Println(result)
	}

	fmt.Println("---------")

	for i := 0; i < p; i++ {
		var b strings.Builder
		b.Grow(2 * (p - i))
		for j := 0; j < p-i; j++ {
			b.WriteString("* ")
		}
		fmt.Println(b.String())
	}
}
