// ------------------ revision with js and go -------------------------
package main

import "fmt"

// below is the sample code of how we can actually declare a map in go and how to use it
// func main() {
//	   // we can actually use somethign like counts := make(map[string]int) to get a map also
//     // 1. Create and initialize a map using a literal
//     salaries := map[string]int{
//         "John":   60000,
//         "Jane":   75000,
//         "Albert": 45000,
//     }
//     fmt.Println("Initial map:", salaries)

//     // 2. Add a new key-value pair
//     salaries["Mike"] = 50000
//     fmt.Println("After adding Mike:", salaries)

//     // 3. Access a value
//     janeSalary := salaries["Jane"]
//     fmt.Println("Jane's salary:", janeSalary)

//     // 4. Check if a key exists
//     if albertSalary, exists := salaries["Albert"]; exists {
//         fmt.Println("Albert's salary is:", albertSalary)
//     } else {
//         fmt.Println("Albert not found")
//     }

//     // 5. Update a value
//     salaries["John"] = 62000
//     fmt.Println("After updating John:", salaries)

//     // 6. Delete a key-value pair
//     delete(salaries, "Albert")
//     fmt.Println("After deleting Albert:", salaries)
// }

func main() {

	// problem 1 - count elements of an array
	newMap := make(map[int]int)

	arr := []int{1, 1, 3, 4, 5, 6, 7, 7}

	for i := 0; i < len(arr); i++ {
		if value, exists := newMap[arr[i]]; exists {
			newMap[arr[i]] = value + 1
		} else {
			newMap[arr[i]] = 1
		}
	}

	fmt.Println(newMap)
}
