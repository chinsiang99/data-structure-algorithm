// counting inversions in an array (counting pairs)
// we wanted to find out pairs that left is greater than right

let arr = [5, 3, 2, 4, 1]

function method1(arr){
    let countOfPairs = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                countOfPairs++
            }
        }
    }

    return countOfPairs
}

// time complexity is O(n^2), space complexity is O(1)
console.log(method1(arr))

// before we go for the next metod, we should revisit/refresh merge sort technique
let arr2 = [5, 3, 2, 4, 1]
function merge(arr, left, mid, right) {
    let result = [];
    let i = left;
    let j = mid + 1;
  
    // Compare elements from both halves and merge
    while (i <= mid && j <= right) {
      if (arr[i] < arr[j]) {
        result.push(arr[i]);
        i++;
      } else {
        result.push(arr[j]);
        j++;
      }
    }
  
    // Add remaining elements from the left half
    while (i <= mid) {
      result.push(arr[i]);
      i++;
    }
  
    // Add remaining elements from the right half
    while (j <= right) {
      result.push(arr[j]);
      j++;
    }
  
    // Copy the result back into the original array
    for (let k = 0; k < result.length; k++) {
      arr[left + k] = result[k];
    }
}
  
function mergeSortHelper(arr, left, right) {
    if (left >= right) return;
  
    const mid = Math.floor((left + right) / 2);
  
    // Recursively sort the left and right halves
    mergeSortHelper(arr, left, mid);
    mergeSortHelper(arr, mid + 1, right);
  
    // Merge the sorted halves
    merge(arr, left, mid, right);
}
  
function mergeSort(arr) {
    mergeSortHelper(arr, 0, arr.length - 1);
}

console.log(mergeSort(arr2), "this is after merge sort", arr2)


// need to revisit this, this is important
// link: https://www.youtube.com/watch?v=AseUmwVNaoY&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=45
// function method2(arr){
//     let countOfPairs = 0
//     for(let i = 0)
// }