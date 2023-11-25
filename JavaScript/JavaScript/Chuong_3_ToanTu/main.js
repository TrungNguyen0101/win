console.log("Nguyen")
console.log(Number("5.4"));  //5.4
console.log(Number(5.4));            //5.4
console.log(Number("Nguyen"));  //NaN
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
console.log(Number(false)); //0
console.log(Number("")); //0
console.log(Number(NaN)); //NaN
console.log(Number(true)); //1

//string
console.log(String(123));
console.log(String("123"));
console.log(String(null));


//type coercion
console.log("type coercion");
console.log(1 + 2);
console.log(1 +"2");
console.log("2" + "2");
console.log("10" - "2");
console.log(null + ""); //null
console.log(null + undefined); //NaN
console.log(6 <= 5); //false
console.log("== vs ===" );
console.log(6 == "6");  //true
console.log(true == 1); //true Number(true)=1
console.log(1 == "01"); //true Number("01")=1
console.log(null== ""); //false  

