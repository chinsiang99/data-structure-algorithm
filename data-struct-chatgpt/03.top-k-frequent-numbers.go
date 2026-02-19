package main

import (
	"fmt"
	"slices"
)

func main() {
	fmt.Println(topFrequentElements([]int{1, 1, 1, 2, 2, 3}, 2))
	fmt.Println(topFrequentElements([]int{1}, 1))
	fmt.Println("---------------------")
	fmt.Println(topFrequentElementsBuckets([]int{1, 1, 1, 2, 2, 3}, 2))
	fmt.Println(topFrequentElementsBuckets([]int{1}, 1))
}

func topFrequentElements(array []int, k int) []int {
	mapping := make(map[int]int, len(array))

	// mapping frequency
	// for i := 0; i < len(array); i++ {
	// 	value, found := mapping[array[i]]

	// 	if found {
	// 		mapping[array[i]] = value + 1
	// 	} else {
	// 		mapping[array[i]] = 1
	// 	}
	// }
	for _, x := range array {
		mapping[x]++
	}

	type Pair struct {
		Num   int
		Count int
	}

	pairs := make([]Pair, 0, len(mapping))
	for num, count := range mapping {
		pairs = append(pairs, Pair{Num: num, Count: count})
	}

	// Go 1.21+ (slices.SortFunc)
	slices.SortFunc(pairs, func(a, b Pair) int {
		if a.Count == b.Count {
			return 0
		}
		if a.Count > b.Count {
			return -1 // a before b
		}
		return 1
	})
	result := make([]int, 0, k)
	for i := 0; i < k; i++ {
		result = append(result, pairs[i].Num)
	}
	return result
}

func topFrequentElementsBuckets(array []int, k int) []int {
	mapping := make(map[int]int, len(array))

	for _, value := range array {
		mapping[value]++
	}

	// frequency
	arrayFrequency := make([][]int, len(array)+1)

	for key, value := range mapping {
		arrayFrequency[value] = append(arrayFrequency[value], key)
	}
	result := make([]int, 0, k)
	for i := len(arrayFrequency) - 1; i >= 1 && len(result) < k; i-- {
		for _, value := range arrayFrequency[i] {
			result = append(result, value)
			if len(result) == k {
				break
			}
		}
	}

	return result
}
