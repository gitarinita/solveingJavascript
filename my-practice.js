// 1. Write a js program to reverse a string without using any built-in string reverse functions.

// let a = "arinita";
// let b= a.split("");
// console.log(b); 
// let c = b.reverse().join("");
// console.log(c);

function reversestrng(x){
    return x.split("").reverse().join("");   
};

const c = reversestrng("arinita");
console.log(c);

// 2. Implement a function to check if a given string is a palindrome.

function reversestrng(x){
    y= x.split("").reverse().join("");

    if(y==x){
        return x + " is a palindrome number";
    }else{
        return x + " is not a palindrome number";
    }
};

const d= reversestrng("madam");
console.log(d);

// Write a program to find the largest element in a given list.

let e=[23, 4, 5, 78, 102];



function secondLargest(nums) {
    let firstMax = Number.NEGATIVE_INFINITY;
    let secondMax = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > firstMax) {
            secondMax = firstMax;
            firstMax = nums[i];
        } else if (nums[i] > secondMax && nums[i] < firstMax) {
            secondMax = nums[i];
        }
    }
    
    return secondMax;
}

// Example usage:
const numbers = [10, 5, 8, 12, 7];
const result = secondLargest(numbers);
console.log(result); // Output: 10


// Implement a function to count the occurrence of each element in a list.

































