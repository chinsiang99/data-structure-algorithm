/* Problem 6: Koko Eating Bananas (Binary Search on Answer)

Koko has piles of bananas where piles[i] is the number of bananas in the i-th pile.
She can eat at most k bananas per hour. Each hour, she chooses one pile and eats up to k bananas from it (if the pile has fewer than k, she finishes it).

Return the minimum integer k such that she can finish all bananas within h hours.

Examples:

piles = [3,6,7,11], h = 8 → k = 4

piles = [30,11,23,4,20], h = 5 → k = 30

piles = [30,11,23,4,20], h = 6 → k = 23 */

// tests
console.log(kokoEatingBananas([3, 6, 7, 11], 8)) // 4
console.log(kokoEatingBananas([30, 11, 23, 4, 20], 5)) // 30
console.log(kokoEatingBananas([30, 11, 23, 4, 20], 6)) // 23

function kokoEatingBananas(piles, hoursGiven){
    let left = 1
    let right = piles[0]

    for(const value of piles){
        right = Math.max(right, value)
    }

    const hoursNeeded = (bananasPerHour) => {
        let result = 0
        for(let i = 0; i < piles.length; i++){
            result = result + Math.ceil(piles[i] / bananasPerHour)
        }
        return result
    }

    while(left < right){
        const mid = Math.floor((left + right) / 2)
        if(hoursNeeded(mid) <= hoursGiven){
            right = mid
        }else{
            left = mid + 1
        }
    }

    return left
}