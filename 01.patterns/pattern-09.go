// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"strings"
)

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
// * * * * * * * * *.      9, 7, 5, 3, 1 2 * p - 1, 2 * p - 3
//   * * * * * * *
//     * * * * *
//       * * *
//         *

func main() {
	p := 5

	// // for i := 0; i < p; i++ {

	// // }

	// for i := 0; i < p; i++ {
	// 	space := strings.Repeat("  ", p-i-1)
	// 	stars := strings.Repeat("* ", 2*i+1)
	// 	fmt.Println(space + stars)
	// }

	for i := 0; i < p; i++ {
		space := strings.Repeat("  ", p-i-1)
		stars := strings.Repeat("* ", 2*i+1)
		fmt.Println(space + stars)

	}

	for i := 0; i < p; i++ {
		space := strings.Repeat("  ", i)
		stars := strings.Repeat("* ", 2*p-(2*i+1))
		fmt.Println(space + stars)
	}

	fmt.Println("---------")

	for i := 0; i < p; i++ {
		var b strings.Builder
		// b.Grow(2*(2*p) - 1)
		for j := 0; j < p-i-1; j++ {
			b.WriteString("  ")
		}

		for j := 0; j < 2*i+1; j++ {
			b.WriteString("* ")
		}

		fmt.Println(b.String())
	}

	for i := 0; i < p; i++ {
		var b strings.Builder
		b.Grow(2*(2*p) - 1)
		for j := 0; j < i; j++ {
			b.WriteString("  ")
		}

		for j := 0; j < 2*p-(2*i+1); j++ {
			b.WriteString("* ")
		}

		fmt.Println(b.String())
	}
}
