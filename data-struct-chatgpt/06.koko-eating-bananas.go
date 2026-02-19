package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello world")
	fmt.Println(kokoEatingBananas([]int{3, 6, 7, 11}, 8))       // 4
	fmt.Println(kokoEatingBananas([]int{30, 11, 23, 4, 20}, 5)) // 30
	fmt.Println(kokoEatingBananas([]int{30, 11, 23, 4, 20}, 6)) // 23

}

func kokoEatingBananas(piles []int, hoursGiven int) int {
	left := 1
	right := piles[0]

	for index := range piles {
		right = max(right, piles[index])
	}

	hoursNeeded := func(bananasPerHour int) int {
		result := 0
		for index := range piles {
			// takenHour := float64(piles[index]) / float64(bananasPerHour)
			// result = result + int(math.Ceil(takenHour))

			result = result + (piles[index]+bananasPerHour-1)/bananasPerHour
			// Rule of thumb:
			// ceil(a/b) = (a + b - 1) / b for positive ints.
		}
		return result
	}

	for left < right {
		// mid := int(math.Floor((float64(left) + float64(right)) / 2))
		mid := (left + right) / 2
		// we can use mid := (left + right) / 2
		if hoursNeeded(mid) <= hoursGiven {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return left
}
