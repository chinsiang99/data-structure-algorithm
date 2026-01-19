// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"strconv"
	"strings"
)

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

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

	fmt.Println("---------")
	starting := 0
	for i := 0; i < p; i++ {
		var b strings.Builder
		for j := 0; j < i+1; j++ {
			starting = starting + 1
			b.WriteString(strconv.Itoa(starting))
			b.WriteByte(' ')
		}
		fmt.Println(b.String())
	}
}
