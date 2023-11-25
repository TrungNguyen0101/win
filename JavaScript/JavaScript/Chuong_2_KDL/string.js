//String
"nguyen";
'nguyen';
`nguyen`;
const name="Nguyen";
// console.log(name);
console.log(typeof name);
const newStr="Pham Trung Nguyen 20 tuoi";
const newStr2="Pham Trung "+ name + " 20 tuoi";
// console.log(newStr);
// console.log(newStr2);
const newStr3=`Pham Trung ${name} 20 tuoi`;
// console.log(newStr3);
// console.log(newStr3.length);
const myStr="Pham Trung Nguyen "
console.log(myStr);
console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.startsWith("Pham"));
console.log(myStr.endsWith("nguyen"));
console.log(myStr.includes("j"));
console.log(myStr.indexOf("m"));
console.log(myStr.replace("Nguyen","Tuan"));
console.log(myStr.repeat(5));
console.log("-----slice");
console.log(myStr.slice(0,6));
console.log(myStr.slice(-2));
console.log(myStr.charAt(5));
console.log("-----sub");
console.log(myStr.substr(3,9));
console.log(myStr.substring(3,9));

console.log(myStr.trim().replace("Nguyen","Tuan").toUpperCase().repeat(2));
