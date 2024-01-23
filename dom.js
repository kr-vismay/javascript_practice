/* to access the html elements in js ...
   1. document.getElementById("id")
   2. document.getElementsByClassName("class") return collection
   3. document.getElementsByTagName("tag") return collection
   4. document.querySelector(".class,#id,tag")--> fetch first element
   5. document.querySelectorAll(".class,#id,tag") --> fetch all elements  return collection
*/

let div = document.querySelector(".name");
let para1 = document.querySelector(".print-name");
let para2 = document.querySelector(".print-msg");
console.log(div);
console.log(para1);

para1.innerHTML= "vismay";

console.log(div.childNodes);
console.log(para1.parentElement);
console.log(para1.nextElementSibling);
console.log(para1.previousElementSibling);

// manipulation

para1.style.color = "red";

// add node and text

let heading = document.createElement("h3");
heading.innerHTML="welcome";
div.appendChild(heading);
div.classList.add("title");

// events
document.body.style.backgroundColor="white"
let btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    if(document.body.style.backgroundColor=="white"){
        document.body.style.backgroundColor="yellow"
        btn.innerHTML="set white";
    }else{
        document.body.style.backgroundColor="white";
        btn.innerHTML="set yellow"
    }
});