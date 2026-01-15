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

// 4 1 4
// 3 3 3
// 2 5 2
// 1 7 0
// 0 9 0

func main() {
	p := 5

	// for i := 0; i < p; i++ {

	// }

	for i := 0; i < p; i++ {
		space := strings.Repeat("  ", p-i-1)
		stars := strings.Repeat("* ", 2*i+1)
		fmt.Println(space + stars)
	}

	fmt.Println("---------")

	for i := 0; i < p; i++ {
		var b strings.Builder
		// b.Grow(3*p - 1)
		// space
		b.Grow((p-i-1)*2 + (2*i+1)*2)
		for j := 0; j < p-i-1; j++ {
			b.WriteString("  ")
		}

		for j := 0; j < 2*i+1; j++ {
			b.WriteString("* ")
		}

		fmt.Println(b.String())
	}
}
