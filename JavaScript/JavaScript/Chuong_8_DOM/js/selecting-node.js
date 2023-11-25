//2.1 document.querySelector("Selector") : lấy ra 1 selector trả về note
console.log(" ----------- document.querySelector(Selector) -----------")
const singeNone1= document.querySelector("h1");
const singeNone2= document.querySelector(".container");
const singeNone3= document.querySelector("#spinner");
const singeNone4= document.querySelector(".container .selector"); // không có trả về null
console.log( singeNone1);
console.log( singeNone2);
console.log( singeNone3);
console.log( singeNone4);

//2.2 document.querySelectorAll("Selector") : lấy ra tất cả selector trả về noteList chỉ dùng đc for and forEach
console.log(" ----------- document.querySelectorAll(Selector) -----------")
const multiNode1= document.querySelector(".item") // trả về 1 node
const multiNode2= document.querySelectorAll(".item") // trả về NodeList
const multiNode3= document.querySelectorAll(".item .item1") // trả về empty NodeList
console.log( multiNode1)
console.log( multiNode2)
console.log( multiNode3)


//2.3 document.getElementsByClassName("className") : 
console.log(" ----------- document.getElementsByClassName(className) -----------")
const classNode1= document.getElementsByClassName(".item"); // sai vi co dau . 
const classNode2= document.getElementsByClassName("item"); 
console.log(classNode1);
console.log(classNode2);


//2.4 document.getElementsByTagName("tagName")
console.log(" ----------- document.getElementsByTagName(tagName) -----------")
const tagName1= document.getElementsByTagName("h1");
const tagName2= document.getElementsByTagName("li");
console.log(tagName1);
console.log(tagName2);


//2.5 document.getElementsById("Id")
console.log(" ----------- document.getElementsById(Id) -----------")
const idNode1= document.getElementById("spinner");
const idNode2= document.getElementById("spinners"); // không có trả về null
console.log(idNode1);
console.log(idNode2);

