// // we use if/if - else/elseif for conditional statemant
// // check for license process

// let age = prompt("enter yout age "); // use to take input from user
// if (age>=18) {
//     document.write("congratulation for your license");
//     document.write('<br>');
// } else {
//     document.write("wait for 18");
//     document.write('<br>');
// }

// // switch - case

// let day = "monday";

// switch (day) {
//     case 'monday':
//         document.write("welcome to office");
//         document.write('<br>');
//         break;
//     case 'sunday':
//         document.write("close");
//         document.write('<br>');
//         break;
//     default:
//         document.write("please select valid day");
//         document.write('<br>');
//         break;
// }

// // trivial condition

// let AGE = 20;

// AGE>=20?document.write("true"):document.write("false");

// // loops
// // for - loop
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
    
//     sum = sum + i;
// }
// document.write('<br>');
// document.write(sum);

// // while loop

// let i=0
// while(i<=10){
//   document.write('<br');
//   document.write(i);
// }

// // do-while loop   must run atleast one time
// let j = 1
// do {
//   document.write(j); 
// } while (j<=5);

// // for-of loop   use for string iteration
// let str = "vismay";
// for (const iterator of str) {
//     document.write(iterator);
//     document.write("<br>");
// }

// for in loop use for object

const student = {
    name : "vismay",
    add : "mehsana"
}

for (const key in student) {
    document.write("key =",key,"value =",student[key]);
    document.write("<br>");
}