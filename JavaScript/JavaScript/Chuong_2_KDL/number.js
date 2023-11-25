console.log(typeof 10);
const number1="5";
const number2="6.8";
console.log(`parseInt(5)=${parseInt(number1)}`);
console.log(`parseInt(6.8)=${parseInt(number2)}`);
console.log(`parseInt(6.8)=${parseFloat(number2)}`);
console.log(`Math.floor(6.8)=${Math.floor(number2)} : làm tròn xuống`);
console.log(`Math.ceil(6.8)=${Math.ceil(number2)} : làm tròn lên`);
console.log(`Math.round(6.8)=${Math.round(number2)} : làm tròn gần nhất`);
console.log(`Math.round(6.5)=${Math.round(7)} : làm tròn gần nhất`);
console.log(`parseFloat((1/3).toFixed(3)):${parseFloat((1/3).toFixed(3))} `);
console.log(`(1/3).toFixed(3):${(1/3).toFixed(3)}`)
console.log(`Math.round(Math.random()*20):${Math.round(Math.random()*20)} : làm tron gần nhất -> random`);
console.log(`Max:${Math.max(1,2,-2,5)}`);
console.log(`isNaN("123Nguyen"):${isNaN("123Nguyen")}`); //true
console.log(`isNaN("123"):${isNaN("123")}`);  //false
console.log(`isNaN(123):${isNaN(123)}`);  //false
console.log(`isNaN(NaN):${isNaN(NaN)}`);  //true    
console.log(`isNaN(true):${isNaN(true)}`);  //false
 
console.log(`Number.isNaN("Nguyen"):${Number.isNaN("Nguyen")}`); //false
console.log(`Number.isNaN("123"):${Number.isNaN("123")}`); //false
console.log(`Number.isNaN(123):${Number.isNaN("123")}`); //false
console.log(`Number.isNaN(0/0):${Number.isNaN(0/0)}`); //true
console.log(typeof Number.NaN);