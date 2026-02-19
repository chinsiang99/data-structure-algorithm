package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Println("hello world")
	fmt.Println(mergeIntervals([][]int{{1, 3}, {2, 6}, {8, 10}, {15, 18}}))
	fmt.Println(mergeIntervals([][]int{{1, 4}, {4, 5}}))
	fmt.Println(mergeIntervals([][]int{{1, 4}, {0, 2}, {3, 5}}))
	fmt.Println(mergeIntervals([][]int{}))
}

func mergeIntervals(intervals [][]int) [][]int {
	// we should sort first
	if len(intervals) == 0 {
		return [][]int{}
	}

	sort.Slice(intervals, func(i, j int) bool {
		if intervals[i][0] == intervals[j][0] {
			return intervals[i][1] < intervals[j][1]
		}
		return intervals[i][0] < intervals[j][0]
	})

	result := make([][]int, 0, len(intervals))
	for i := 0; i < len(intervals); i++ {
		if len(result) == 0 || intervals[i][0] > result[len(result)-1][1] {
			result = append(result, []int{intervals[i][0], intervals[i][1]})
		} else {
			if intervals[i][1] > result[len(result)-1][1] {
				result[len(result)-1][1] = intervals[i][1]
			}
		}
	}

	return result
}
