/*
Calculate the factorial of input
*/ 
function factorial(anyNumber){  
    num = parseInt(anyNumber)
    sum=1;
    for(let i=num; 0 < i; i--){
        sum *= i;
    }
    return sum
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)