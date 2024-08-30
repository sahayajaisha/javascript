//How do you access the first and last elements of an array?
let arr = [1,2,3,4]
let firstElement = arr[0];
let lastElement = arr[arr.length-1];
console.log(firstElement)
console.log(lastElement)

//How do you add an element to the end of an array?
let arr = [ 1,2,3,4,5];
arr.push(6);
console.log(arr)


//How do you remove the last element from an array?
let arr = [1,2,3,4]
arr.pop(4);
console.log(arr)


//How do you remove an element from an array at a specific index?
let arr = [1,2,3,4]
arr.splice(2,1);  ///index,row
console.log(arr)


//How do you add an element from an array at a specific index?
let arr = [1,3,4]
arr.splice(1,0,2)//index,0,need element to add
arr.splice(4,0,5)
console.log(arr)

//How do you concatenate two arrays in JavaScript?
let arr1 = [1,2]
let arr2 = [3,4]
let arrNew = arr1.concat(arr2)
console.log(arrNew)


//How do you check if an element exists in an array?
Answer: You can check if an element exists in an array using the indexOf() method. If the element is not found, indexOf() returns -1. For example:

let arr = [1, 2, 3];

if (arr.indexOf(2) !== -1) {

console.log('Element found');

} else {

console.log('Element not found');

}
