/*
Calculate the total of input array
*/
function sum(numberArray){
    total = 0
    for (const num of numberArray){
        total += num;
        console.log(total)
    }
    return total
}

// Test cases
console.log(sum([1, 2, 3, 4]) === 10)
console.log(sum([-3, 5, 19, -6]) === 15)

