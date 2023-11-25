// 1. textContent : lấy ra nội dung của selector or thay đổi
console.log(" ----------- selector.textContent -----------");
const spinner=document.querySelector("#spinner");
// spinner.textContent = "Heloo Nguyên"; // thay đổi
console.log(spinner.textContent); // lấy ra nội dung của selector spinner

//2. innerText : lấy ra nội dung và tự loại bỏ khoảng trắng nhưng k lấy phần display: none
console.log(" ----------- selector.innerText -----------");
console.log(spinner.innerText); 

//2. innerHTML : lấy ra nội dung của selector và HTML or thay đổi
console.log(" ----------- selector.innerHTML -----------");
console.log(spinner.innerHTML); 
spinner.innerHTML = `<div class="hello">Hello Nguyên</div>` ; // thay đổi 
console.log(spinner.innerHTML); 