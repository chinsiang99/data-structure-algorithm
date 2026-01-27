// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"strings"
)

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

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

	// **********
	// ****  ****
	// ***    ***
	// **      **
	// *        *
	// *        *
	// **      **
	// ***    ***
	// ****  ****
	// **********

	fmt.Println("---------")
	for i := 0; i < p; i++ {
		var b strings.Builder
		var b2 strings.Builder

		for j := 0; j < p-i; j++ {
			b.WriteByte('*')
		}
		for j := 0; j < i; j++ {
			b2.WriteByte(' ')
		}

		fmt.Println(b.String() + b2.String() + b2.String() + b.String())
	}

	for i := 0; i < p; i++ {
		var b strings.Builder
		var b2 strings.Builder
		for j := 0; j < i+1; j++ {
			b.WriteByte('*')
		}

		for j := 0; j < p-i-1; j++ {
			b2.WriteByte(' ')
		}

		fmt.Println(b.String() + b2.String() + b2.String() + b.String())
	}

}
