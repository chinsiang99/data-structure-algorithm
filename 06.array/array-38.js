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

console.log(method1(arr));



