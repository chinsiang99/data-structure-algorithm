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

// integrate the logic with merge sort
// function method2(arr) {
//     // Helper function to merge two sorted halves and count inversions
//     function mergeAndCount(arr, temp, left, mid, right) {
//       let i = left; // Starting index for left subarray
//       let j = mid + 1; // Starting index for right subarray
//       let k = left; // Starting index for merged array
//       let invCount = 0; // Count of inversions
  
//       // Merge the two subarrays
//       while (i <= mid && j <= right) {
//         if (arr[i] <= arr[j]) {
//           temp[k++] = arr[i++];
//         } else {
//           temp[k++] = arr[j++];
//           invCount += (mid - i + 1); // All remaining elements in the left subarray are inversions
//         }
//       }
  
//       // Copy remaining elements of the left subarray, if any
//       while (i <= mid) {
//         temp[k++] = arr[i++];
//       }
  
//       // Copy remaining elements of the right subarray, if any
//       while (j <= right) {
//         temp[k++] = arr[j++];
//       }
  
//       // Copy merged subarray back into the original array
//       for (i = left; i <= right; i++) {
//         arr[i] = temp[i];
//       }
  
//       return invCount;
//     }
  
//     // Recursive function to split the array and count inversions
//     function mergeSortAndCount(arr, temp, left, right) {
//       let invCount = 0;
//       if (left < right) {
//         const mid = Math.floor((left + right) / 2);
  
//         // Count inversions in the left subarray
//         invCount += mergeSortAndCount(arr, temp, left, mid);
  
//         // Count inversions in the right subarray
//         invCount += mergeSortAndCount(arr, temp, mid + 1, right);
  
//         // Count inversions during the merge step
//         invCount += mergeAndCount(arr, temp, left, mid, right);
//       }
//       return invCount;
//     }
  
//     // Create a temporary array to assist with merging
//     const temp = Array(arr.length);
//     return mergeSortAndCount(arr, temp, 0, arr.length - 1);
// }

// console.log(method2(arr))

function mergeSortChinSiang(arr, low, high){
    let count = 0

    // if(low >= high){
    //     return
    // }

    if(low < high){
        const mid = Math.floor((low + high) / 2)
        count += mergeSortChinSiang(arr, low, mid)
        count += mergeSortChinSiang(arr, mid + 1, high)
    
        count += mergeChinSiang(arr, low, mid, high)
    }

    return count
}

// arr = [5, 3, 2, 4, 1]
console.log(arr)
function mergeChinSiang(arr, low, mid, high){
    let result = []
    let i = low
    let j = mid + 1
    let count = 0
    while(i <= mid && j <= high){
        if(arr[i] <= arr[j]){
            // arr[i] = arr[i] ^ arr[j]
            // arr[j] = arr[i] ^ arr[j]
            // arr[i] = arr[i] ^ arr[j]
            result.push(arr[i])
            i += 1
        }else{
            result.push(arr[j])
            j += 1
            count += (mid - i + 1)
        }
    }

    while(i <= mid){
        result.push(arr[i])
        i++
    }

    while(j <= high){
        result.push(arr[j])
        j++
    }

    for (let k = 0; k < result.length; k++) {
        arr[low + k] = result[k];
    }
    // console.log(count)
    return count
    
}

console.log(mergeSortChinSiang(arr, 0, arr.length - 1), arr)