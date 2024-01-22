// using console.log() we can displa message on console

console.log("this is my first js code");

/* variables and data type 

7 primitive data types (number,string,null,undefined,boolean,bigint,symbol)
variable is one kind of container which store some value like .. number,string etc

var : scope - global, update - yes, redeclare - yes
let : scope - block { }, update - yes, redeclare - no
const : scope - block { }, update - no, redeclare - no

non-primitive data types : object,array,function etc


*/
var age = 18;
var age = 20;
age = 9;
console.log(age);

let fullName = "vismay patel";
// let fullName = "rajat sharma" error"
fullName = "rajat sharma";
console.log(fullName);
typeof (fullName);

{
    let a = 90;
    console.log(a);
}
{
    let a = 50;
    console.log(50);
}

const PI = 3.14;
console.log(PI);
// const PI = 3.14 error
// PI = 3.1465  error
// must defined

const student = {
    name : "vismay",
    add : "mehsana",
    clg : "LD"
}

console.log(student.clg);
student.name = "rajat";
console.log(student.name);