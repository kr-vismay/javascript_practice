// normal function

function myFunc(a,d){
  return a*d;
}
let res = myFunc(9,10);
console.log(res);

// arrow function 

const val = (p,q)=>{
    return p+q;
}
console.log(val(9,9));


const arr = [10,20,30,40,50,60,70,80];
const num = [2,45,13,54,6,47,87];
const point = [78,89,90,98,96,68];

// forEach loop for array

arr.forEach((val,ind,ar)=>{
    console.log("value is =>",val,"\t index is =>",ind,"\t array is =>",ar);
});

// map method same as a foeEach but map return and store it as a array
// print all elements

const newNum = num.map((val)=>{
  return val*2;
});
console.log(newNum);

// filter
// print only filtered elements
const filtArray = point.filter((val)=>{
  return val>80;
});
console.log(filtArray);

// reduce 
// final output is only one value 

const sum = arr.reduce((res,cur)=>{
  return res + cur;
});
console.log(sum);
