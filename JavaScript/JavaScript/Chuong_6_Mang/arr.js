// Cach tao mang

const student=[1,2,3,4,5,"nguyen","tuan",5];          //c1
const a1= new Array();//c2
// index : là vị trị bắt đầu từ 0
// length: là độ dài của mảng đếm từ 1  
console.log(student[student.length-1]);
console.log("-----arr.length-----");  // độ dài mảng
console.log(student.length);
console.log("-----arr.reverse()-----");// đảo mảng
// console.log(student.reverse());
console.log("-----arr.join()-----"); // nối mảng
console.log(student.join()); // nối mảng bằng dấu ","
console.log(student.join(" ")); // nối mảng theo khoảng trắng
console.log("-----arr.includes()-----"); // tìm kiếm mảng
console.log(student.includes("nguyen")); 
console.log(student.includes("Nguyen"));
console.log("-----arr.indexOf()-----"); // trả về vị trị ptu đc tìm thấy
console.log(student.indexOf(5)); // tìm thấy đầu
console.log(student.lastIndexOf(5)); // tìm thấy cuối
console.log("-----arr.push()-----"); // thêm vào cuối mảng
console.log(student.push("Javascript"));
console.log(student);
console.log("-----arr.unshift()-----"); // thêm vào đầu mảng
console.log(student.unshift("Frontend"));
console.log(student);
console.log("-----arr.pop()-----"); // xóa ptu cuối mảng
console.log(student.pop());
console.log(student);
console.log("-----arr.shift()-----"); // xóa ptu đầu mảng
console.log(student.shift());
console.log(student);
