// callback : pass function as a parameter/argument of another function

function myDocument(some){
    let display = document.getElementById("new");
    display.innerHTML=some;
}

function myCal(a,b,callback){
    let sum = a + b;
    callback(sum);
}

myCal(2,3,myDocument); 

// callback hell problem (nested callback)

function getData(dataId,callbackFunc){
   setTimeout(() => {
    console.log("data",dataId);
    callbackFunc();
   }, 2000);
   
}
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    });
})
