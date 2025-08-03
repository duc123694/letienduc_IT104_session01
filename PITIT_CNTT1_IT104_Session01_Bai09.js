const arr1 = [1, 2, 3, 5, 9];
const arr2 = [4, 6, 7, 8];

let arr3 = [];

const combine = (arr1, arr2) => {
    arr3 = arr1.concat(arr2); 
};

combine(arr1, arr2);

arr3 = arr3.sort((a, b) => a - b); 

console.log(arr3);
