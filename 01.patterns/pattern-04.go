// ------------------ revision with js and go -------------------------
package main

import (
	"fmt"
	"strconv"
	"strings"
)

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

func main() {
	p := 5

	for i := 0; i < p; i++ {
		n := strconv.Itoa(i + 1)
		line := strings.Repeat(n+" ", i+1)
		fmt.Println(line)
	}

	fmt.Println("---------")

	for i := 0; i < p; i++ {
		var b strings.Builder
		// below grow is actually optional, because if we need somthing like 12 13 14 etc, it will allocate more as well regardless
		b.Grow(2 * (i + 1))
		for j := 0; j < i+1; j++ {
			if j > 0 {
				b.WriteByte(' ')
			}
			b.WriteString(strconv.Itoa(i + 1))
		}
		fmt.Println(b.String())
	}
}
