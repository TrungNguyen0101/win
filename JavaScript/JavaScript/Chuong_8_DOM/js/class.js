

//1. selector.classList.add("class")  : add class vào elector
const container= document.querySelector(".container"); // lấy ra selector
container.classList.add("is-active") // add class is-active vào selector 

//2. selector.classList.remove("class")  : remove class vào elector
container.classList.remove("container")

//3. selector.classList.contains("class")  : kiểm tra elector có chứa class đó hay không
console.log(container.classList.contains("container")); // false
console.log(container.classList.contains("is-active")); // true

//4. selector.classList.toggle("class")  : nếu có chứa class rồi thì remove , chưa thì add
// Tương đương với đoạn code
// if(container.classList.contains("is-active"))
// {
//     container.classList.remove("is-active");
// }
// else{
//     container.classList.add("is-active");
// }
container.classList.toggle("is-active");


//5. selector.className  : trả về chuỗi class của selector
const Name =document.querySelector(".a");
console.log(Name.className);  // trả về chỗi các class trong selector class a
Name.className="a"; // đổi all class thành class a








