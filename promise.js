// promise is use to solve the problem of callback hell
// promise is object, two callback are use 1. resolve 2. reject
/* there is three state of promise 
1. pending (no any kind of handler is complete like resolve or reject )
2. fulfilled resolve
3. reject
 */
// let boolean = true;
// let promise = new Promise((resolve,reject)=>{
//    if (!boolean) {
//     resolve("done");
//    } else {
//     reject("error");
//    }
// });

// promise.then((pri)=>{
//      console.log(pri);
// });
// promise.catch((error)=>{
//    console.log(error);
// });

// async and await

async function getMsg(){
    await console.log("msg-1");
    console.log("msg-2");
    console.log("msg-3");
}
getMsg();

console.log("msg-4");