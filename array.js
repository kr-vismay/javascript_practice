// array is collection of same type of elements like.. number,string etc
// way to create array

let arr = [2,4,6,8];
console.log(arr);

let arr1 = [];
arr1[0]=1;
console.log(arr1);

let fruits = new Array("mango","banana","orange");
console.log(fruits);

// properties

console.log(fruits.length);

// methods

console.log(fruits.slice(1,3));
console.log(fruits.concat(arr));
console.log(fruits.toString());
console.log(fruits.join("$"));
console.log(fruits.indexOf("mango"));
console.log(fruits.lastIndexOf("banana"));
fruits.push("apple");
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.pop());
fruits.unshift("greps"); // add as a first element
console.log(fruits);
fruits.shift() // remove first elements
console.log(fruits);
console.log(fruits.reverse());
