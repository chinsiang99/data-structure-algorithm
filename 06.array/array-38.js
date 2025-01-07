// problem statement: maximum product subarray

let arr = [2, 3, -2, 4]

function method1(arr) {
    let maximumProductArray = [];
    let maximumValue = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let max = arr[i];
        let accumulateArray = [arr[i]];

        for (let j = i; j < arr.length; j++) {
            if (i !== j) {
                max *= arr[j];
                accumulateArray.push(arr[j]);
            }

            if (max > maximumValue) {
                maximumValue = max;
                maximumProductArray = accumulateArray.slice();
            }
        }
    }

    return [maximumValue, maximumProductArray];
}

// time complexity O(n^2)
console.log(method1(arr));

// optimal solution
function method2(arr){
    let max = -Infinity

    // For prefix traversal
    let prefix = 1;
    let tempStartPrefix = 0;
    let startPrefix = 0, endPrefix = 0;

    // For suffix traversal
    let suffix = 1;
    let tempStartSuffix = arr.length - 1;
    let startSuffix = 0, endSuffix = 0;

    let start = 0, end = 0

    for(let i = 0; i < arr.length; i++){
        // prefix traversal
        if(prefix === 0){
            prefix = 1
            tempStartPrefix = i
        }
        prefix = prefix * arr[i]
        if(prefix > max){
            max = prefix
            startPrefix = tempStartPrefix
            endPrefix = i
            start = startPrefix
            end = endPrefix
        }

        if(suffix === 0){
            suffix = 1
            tempStartSuffix = arr.length - 1 - i
        }
        suffix = suffix * arr[arr.length - 1 - i]
        if(suffix > max){
            max = suffix
            startSuffix = arr.length - 1 - i
            endSuffix = tempStartSuffix
            start = startSuffix
            end = endSuffix
        }

        // max = Math.max(max, Math.max(prefix, suffix))
    }

    return [max, arr.slice(start, end+1)]
}

// this method will have a time complexity of O(n) and with O(1) of space complexity
console.log(method2(arr))



