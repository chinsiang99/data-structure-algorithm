/* Problem 5: Merge Intervals (backend-relevant: scheduling, bookings, time windows)

You’re given an array of intervals intervals, where intervals[i] = [start, end].
Merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.

Overlapping rule: [a,b] overlaps [c,d] if c <= b.

Examples:

[[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]

[[1,4],[4,5]] → [[1,5]] */

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])) // [[1,6],[8,10],[15,18]]
console.log(mergeIntervals([[1,4],[4,5]]))               // [[1,5]]
console.log(mergeIntervals([[1,4],[0,2],[3,5]]))         // [[0,5]]
console.log(mergeIntervals([]))                          // []

function mergeIntervals(intervals){
    if(intervals.length === 0){return []}

    intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    console.log(intervals)
    const result = []
    for(const [a, b] of intervals){
        if(result.length === 0 || a > result[result.length - 1][1]){
            result.push([a, b])
        }else{
            result[result.length - 1][1] = Math.max(b, result[result.length - 1][1])
        }
    }
    return result
}