// leaders in an array
// find the leaders in an array
// note that the last element will always be a leader, because nothing is on the right
// but for that part, if you see clearly, the definition is actually leaders meaning that he is the largest even u run through it
// example: [5, 4, 6, 5]
// 5 and 4 is not leaders because5 and 4 is not the largest if u g to behind
// in here, 6 is leader, because 5 is smaller than him, and 5 is also a leader because it is the last element

// this problem here is to collect all the leaders
let array = [10, 22, 12, 3, 0, 6]
function method(arr){
    let output = []
    for(let i = 0; i < arr.length; i++){
        let leader = true
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                leader = false
                break;
            }
        }

        if(leader){
            // console.log("yoyoyo")
            output.push(arr[i])
        }
    }
    return output
}

// not that this method has a time compelxity of O(n^2), space complexity of O(n)
console.log(method(array))