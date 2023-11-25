// selector.addEventListener

console.log(" ------------ click ------------");
const button = document.querySelector(".button");
const span = document.querySelector(".button span"); // thẻ span trong class button

//c1
function buttonClick(e) {
  // e.stopPropagation();
  console.log("Click button");
}
// Lỗi khi dùng function vào eventListener
// button.addEventListener("click",buttonClick());  // sai ( goi function)
// button.addEventListener("click", buttonClick); // Dung

//c2
// button.addEventListener("click",function() {
//     console.log("Pham Trung Nguyen")
// })

console.log(" ------------ bubbling ------------");
//bubbling: nổi bột -> sự kiện click chạy từ trong ra ngoài
/* 

span.addEventListener("click", function (e) {
//   e.stopPropagation();    // ** ngăn chặn bubbling , chỉ xh mỗi span ( chặn chính nó)
  e.stopImmediatePropagation(); // chặn alll
  console.log("Click span");
});

span.addEventListener("click", function () {
  console.log("Click span2");
}, 
{
    capture :true,// ngược lại với bubble , chặn button k hiệu quả
});

document.body.addEventListener( "click", function () {
    console.log("Click body");
  },
); 
*/

console.log(" ----- e.target and e.currentTarget -----")
button.addEventListener("click", function (event) {
    // event.target : chọn ra chính xác element mà mình click vào
    console.log(`event.target: ${event.target}`); 
    // event.currentTarget : chọn ra phân tử mà mình click vào
    console.log(`event.currentTarget: ${event.currentTarget}`);
}); 


console.log(" ----- e.preventDefault -----") // ngăn chặn load web khi click vào thẻ a..
const link=document.querySelector(".link")
link.addEventListener("click",function(e) {
    e.preventDefault();
    // console.log("Facebook")
    // console.log(e.target);
    // console.log(e.target.style);
    // e.target.style.color= "red";

    // truy xuất data attribute (data-name="nguyen")
    // event.target.dataset.abc
    const name= e.target.dataset.name;
    console.log(name);
})