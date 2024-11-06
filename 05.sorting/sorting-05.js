// quicksort
// steps
// 1. choose a pivot (for a comparison)
// 2. put remaining values where smaller on the left, larger on the right
// 3. repeat same steps for the left and right until its done

let arrayNumbers = [1, 2, 5, 6, 7, 3, 4, 9, 8]
function quickSortAsc(arr, low, high){
    if(low < high){
        let partition = getPartition(arr, low, high)
        quickSortAsc(arr, low, partition - 1)
        quickSortAsc(arr, partition + 1, high)
    }

}

function getPartition(arr, low, high){
    let pivot = arr[low]
    let i = low + 1
    let j = high
    while(i <= j){
        // here we put <= is because theres a possibility that it will be the same value..., we put high - 1 here is because
        while(arr[i] <= pivot && i <= high){
            i++
        }

        while(arr[j] > pivot && j > low){
            j--
        }

        if(i < j){
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]]

    return j
}

quickSortAsc(arrayNumbers, 0, arrayNumbers.length - 1)
console.log(arrayNumbers)