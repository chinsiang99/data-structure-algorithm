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

func main() {
	p := 4

	for i := 0; i < p; i++ {
		stars := strings.Repeat("* ", i+1)
		fmt.Println(stars)
	}

	fmt.Println("---------")

	for i := 0; i < p; i++ {
		var b strings.Builder
		for j := 0; j < i+1; j++ {
			b.WriteString("* ")
		}
		fmt.Println(b.String())
	}
}
