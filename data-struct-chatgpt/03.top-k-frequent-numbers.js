/* Problem 3: Top K Frequent Elements (backend-relevant: log aggregation / heavy hitters)

Given an integer array nums and an integer k, return the k most frequent elements.
You can return the answer in any order.

Examples:

nums = [1,1,1,2,2,3], k = 2 → [1,2]

nums = [1], k = 1 → [1] */

console.log(topFrequentElements([1,1,1,2,2,3], 2))
console.log(topFrequentElements([1], 1))
console.log(topFrequentElementsBuckets([1,1,1,2,2,3], 2))
console.log(topFrequentElementsBuckets([1], 1))

function topFrequentElements(numArray, k){
    let mapping = new Map()

    // n
    for(let i = 0; i < numArray.length; i++){
        mapping.set(numArray[i], mapping.get(numArray[i]) ? mapping.get(numArray[i]) + 1 : 1)
    }

    let arrayMapping = Array.from(mapping)
    // there is sorting algo here, meaning nlogn here
    arrayMapping.sort((a,b) => b[1] - a[1])
    let result = []
    // m
    for(let i = 0; i < k; i++){ 
        result.push(arrayMapping[i][0])
    }

    return result
    // time complexity is n + m + nlogn, meaning nlogn ?
}


function topFrequentElementsBuckets(numArray, k){
    // 1) frequency map
    const freq = new Map();
    for (const x of numArray) {
        freq.set(x, (freq.get(x) ?? 0) + 1);
    }

    // 2) buckets: index = frequency, value = list of numbers with that freq
    const buckets = Array.from({ length: numArray.length + 1 }, () => [])
    for (const [num, count] of freq) {
        buckets[count].push(num);
    }
    let result = []
    for(let i = buckets.length - 1; i >= 1 && result.length < k; i--){
        for(let j = 0; j < buckets[i].length; j++){
            result.push(buckets[i][j])
            if(result.length === k){
                return result
            }
        }
    }
}