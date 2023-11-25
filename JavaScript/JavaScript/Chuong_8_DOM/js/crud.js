// thêm xóa các node trong javascript

//1. document.createElement: cách tạo ra element trong javascript
const div = document.createElement("div");

//2 selector.appendChild : thêm element vào html
const body = document.body; // lấy ra selector body
const body1 = document.querySelector("head"); // lấy ra selector head
// body1.appendChild(div);// thêm vào selector head
body.appendChild(div); // thêm vào selector body

// thêm nội dung và class cho element
div.classList.add("container"); // thêm class vào element
div.className = "container wrapper"; // thêm nhiều class
div.textContent = "Phạm Trung Nguyên"; // thêm nội dung vào
div.innerHTML = `<div class="content"> <h3>Nguyên</h3> </div>`;
div.setAttribute("data-name", "nguyen");

// bài tập làm div theo html = javascript
const card = document.createElement("div"); //tạo element div
const bodyCard = document.querySelector("body"); // lấy ra selector body
bodyCard.appendChild(card); // thêm element vào bodyCard
card.classList.add("card"); // add tên class cho element
const cardImage=document.createElement("img");// tạo element img
cardImage.setAttribute("class","card-image");   // tạo class cho element img
// cardImage.setAttribute("src","https://images.unsplash.com/photo-1640280056011-e1c0fda0fef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80") // thêm src vào element img
card.appendChild(cardImage)



//3. document.createTextNode("chuỗi") : tạo text
const text=document.createTextNode("Phạm Trung Nguyên");
const h1=document.createElement("h1");
h1.appendChild(text); // add text vào h1
body.appendChild(h1); // add h1 vào body


//4. element.cloneNode(1)
const cloneH1=h1.cloneNode(true);
const cloneH2=h1.cloneNode();  // chỉ clone thẻ
body.appendChild(cloneH1); // add cloneH1 vào body
body.appendChild(cloneH2); 


//5 element.hasChildNode()
const h2=document.createElement("h2");
body.appendChild(h2);
console.log(h1.hasChildNodes());  // có ptu con -> true
console.log(h2.hasChildNodes());  // k có ptu con  -> false