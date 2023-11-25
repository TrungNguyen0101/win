function sum(a=0,b=0)
{
    console.log(a+b);
    return a + b;
}
const add=sum;
function average(a,b,fn){
    const total=fn(a,b);
    return total/2;
}
console.log(`(a+b)/2= ${average(200,300,add)}`); 
// goi truoc hay sau cunxg dc


const logName=function(){
    console.log("Nguyen");
}
logName(); // goi sau khai bao


//LIFT chay ngay lap tuc
(function(){
    console.log("Nguyen 123");
})();

if(2>1){
    const message= "Nguyennehjhj";
    // alert(message); // chi goi duoc trong block scope //block scope

    var message2 ="Tuan123"; 
}
console.log(message2);
// console.log(message);  //lỗi
// alert(message2); //loi

function setWidth(){
    var width = 100;
    console.log(width);
}
setWidth();
// console.log(width); // lỗi
let newName="Nguyen 1238989";  // global scope
function hello(){
 let message= "hi"; //block scope
 console.log(`${message} ${newName}`); 
}
hello();

//closure
function sayHi(){ //parent function
    let message ="Hi Nguyen closure"; 
    function sayHi2(){ //inner function
        console.log(message);
    }
    return sayHi2; // return sayHi2();
}
// sayHi();
let input=sayHi();
input();

//vd2
function sayHello(message){
    return function sayHello2(name){
        console.log(`${message} ${name}`);
    }
}
let input2=sayHello("Chao Ban");
input2("Nguyen");
input2(); // giải phóng inner function



//Normal functions
const square = function(x){
    return x*x;
}
console.log(square(5));

//Arrow function
const square1 = (x) =>{
    return x*x;
}
console.log(square1(6));

// các viết rút gọn
/*
const square1 = (x) => x*x; 
 */