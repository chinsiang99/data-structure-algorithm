// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"strings"
)

// *        *
// **      **
// ***    ***
// ****  ****
// ********** 4
// ****  **** 5 1
// ***    *** 6 2
// **      ** 7 3
// *        * 8 4

func main() {
	p := 5

	// // for i := 0; i < p; i++ {

	// // }

	// for i := 0; i < p; i++ {
	// 	space := strings.Repeat("  ", p-i-1)
	// 	stars := strings.Repeat("* ", 2*i+1)
	// 	fmt.Println(space + stars)
	// }

	// for i := 0; i < 2*p-1; i++ {
	// 	var stars string
	// 	if i < p {
	// 		stars = strings.Repeat("* ", i+1)
	// 	} else {
	// 		stars = strings.Repeat("* ", 2*p-i-1)
	// 	}
	// 	fmt.Println(stars)
	// }

	// *        *
	// **      **
	// ***    ***
	// ****  ****
	// ********** 4
	// ****  **** 5 1
	// ***    *** 6 2
	// **      ** 7 3
	// *        * 8 4

	fmt.Println("---------")
	for i := 0; i < 2*p-1; i++ {
		var b strings.Builder
		var b2 strings.Builder

		if i < p {
			starCount := i + 1
			spaceCount := p - starCount

			for j := 0; j < starCount; j++ {
				b.WriteByte('*')
			}
			for j := 0; j < spaceCount; j++ {
				b2.WriteByte(' ')
			}
		} else {
			spaceCount := i - p + 1
			starCount := p - spaceCount

			for j := 0; j < starCount; j++ {
				b.WriteByte('*')
			}
			for j := 0; j < spaceCount; j++ {
				b2.WriteByte(' ')
			}
		}

		fmt.Println(b.String() + b2.String() + b2.String() + b.String())
	}

}
