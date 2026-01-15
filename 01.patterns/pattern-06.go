// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"strconv"
	"strings"
)

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

func main() {
	p := 5

	// for i := 0; i < p; i++ {

	// }

	fmt.Println("---------")

	for i := 0; i < p; i++ {
		var b strings.Builder
		b.Grow(2 * (p - i))
		for j := 0; j < p-i; j++ {
			if j > 0 {
				b.WriteByte(' ')
			}
			b.WriteString(strconv.Itoa(j + 1))
		}
		fmt.Println(b.String())
	}
}
