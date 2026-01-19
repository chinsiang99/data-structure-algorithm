// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"strings"
)

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// 0 1
// 1 2
// 2 3
// 3 4
// 4 5
// 5 4 - 2 * 5 - i - 1
// 6 3 - 2 * 5 - i - 1
// 7 2
// 8 1
// 9 0

func main() {
	p := 5

	// // for i := 0; i < p; i++ {

	// // }

	// for i := 0; i < p; i++ {
	// 	space := strings.Repeat("  ", p-i-1)
	// 	stars := strings.Repeat("* ", 2*i+1)
	// 	fmt.Println(space + stars)
	// }

	for i := 0; i < 2*p-1; i++ {
		var stars string
		if i < p {
			stars = strings.Repeat("* ", i+1)
		} else {
			stars = strings.Repeat("* ", 2*p-i-1)
		}
		fmt.Println(stars)
	}

	fmt.Println("---------")

	for i := 0; i < 2*p-1; i++ {
		var b strings.Builder

		k := i + 1
		if i >= p {
			k = 2*p - i - 1
		}

		for j := 0; j < k; j++ {
			b.WriteString("* ")
		}
		fmt.Println(b.String())
	}
}
