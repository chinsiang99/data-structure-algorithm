// ------------------ revision with js and go -------------------------

// * * * *
// * * * *
// * * * *
// * * * *

package main

import (
	"fmt"
	"strings"
)

func main() {
	p := 4

	// below is like javascript..
	// for i := 0; i < p; i++ {
	// 	var result string
	// 	for i := 0; i < p; i++ {
	// 		result += "* "
	// 	}

	// 	fmt.Println(result)
	// }

	// below is trying to use string repeatable
	result := strings.Repeat("* ", p)
	for i := 0; i < p; i++ {
		fmt.Println(result)
	}

	// below is trying to use string builder
	for i := 0; i < p; i++ {
		var b strings.Builder
		b.Grow(2 * p) // each "* " is 2 chars
		for j := 0; j < p; j++ {
			b.WriteString("* ")
		}
		fmt.Println(b.String())
	}
}
