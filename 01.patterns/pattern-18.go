// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"strings"
)

// E
// D E
// C D E
// B C D E
// A B C D E

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

	// E
	// D E
	// C D E
	// B C D E
	// A B C D E

	fmt.Println("---------")
	for i := 0; i < p; i++ {
		var b strings.Builder

		initial := p - i - 1

		for j := 0; j < i+1; j++ {
			b.WriteRune(rune('A' + initial))
			b.WriteByte(' ')
			initial++
		}
		fmt.Println(b.String())
	}

}
