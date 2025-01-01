function sumRange(upto_number){
    
    if(upto_number == 0){
        return (0);
    }
    if(upto_number == 1){
        return (1);
    }

    return (upto_number + sumRange(upto_number - 1));
}

console.log(sumRange(5));

function power(base, exponent){
    if(exponent == 0){
        return 1;
    }

    if(exponent == 1){
        return base;
    }

    return (base * power(base, (exponent-1)));
}

console.log(power(2, 5));

function factorial(number){
    if(number === 1){
        return 1;
    }

    return (number * factorial(number - 1));
}

console.log(factorial(5));

let arr = ["depth", "start", "audience", "", "persistance", null];

let allPresent = (arr, function(str) {
    console.log(str);
    console.log(str !== null);
})

allPresent(arr);

let allPresent1 = (arr, function() {
    arr.forEach(str=>{
        console.log(str !== null);
    })
})

allPresent1(arr);


let productArray = [1,5,7,1,10];

let productOfArray = (productArray) => {
    return productArray.reduce((acc, curr) => acc * curr , 1);
}

console.log(productOfArray(productArray));