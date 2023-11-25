function log(value) {
  console.log(value);
}

//1 selector.offsetWidth : lấy ra độ rộng của phần tử
log(" ----------- .offsetWidth -----------");
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth);
log(" ----------- .offsetHeight -----------");
//2 selector.offsetHeight : lấy ra chiều cao của phần tử
log(boxed.offsetHeight);

log(" ----------- .offsetLeft -----------");
//3 selector.offsetLeft : trả về vị trí của nó so với bên trái
log(boxed.offsetLeft);
log(" ----------- .offsetTop -----------");
//4 selector.offsetTop : trả về vị trí của nó so với phía trên
log(boxed.offsetTop);

log(" ----------- .offsetParent -----------");
//5 selector.offsetParent : lấy ra phần tử cha để lấy giá trị của phần tử cha
log(boxed.offsetParent); //-> body

log(" ----------- .clientWidth -----------");
//6 selector.clientWidth : độ rộng của phần tử trừ đi border
log(boxed.clientWidth);
log(" ----------- .clientHeight -----------");
//7 selector.clientWidth : chiều cao của phần tử trừ đi border
log(boxed.clientHeight);

log(" ----------- .clientLeft -----------");
//8 selector.clientLeft :  vị trí của nó so với border từ bên trái
log(boxed.clientLeft);
log(" ----------- .clientTop -----------");
//9 selector.clientTop :  vị trí của nó so với border từ phía trên
log(boxed.clientTop);

// window

log(" ----------- window.innerHeight -----------");
//10 window.innerHeight :  chiều cao trong trang web
log(window.innerHeight);
log(" ----------- window.outerHeight -----------");
//11 window.outHeight:      chiều cao cả màn hình
log(window.outerHeight);

log(" ----------- window.innerWidth -----------");
//12 window.innerWidth :  chiều rộng trong trang web
log(window.innerWidth);
log(" ----------- window.outerWidth -----------");
//13 window.outWidth:      chiều rộng cả màn hình
log(window.outerWidth);

log(" ----------- .getBoundingClientRect -----------");
//14 selector.getBoundingClientRect
log(boxed.getBoundingClientRect());

// so sánh nodeList and HTMLCollection
const li = document.querySelectorAll("li"); //nodeList
const li1 = document.getElementsByTagName("li"); // HTML collection
log(li);
log(li1);
// Điểm giống: có thể truy cập bằng index, có độ dài(length), giống mảng nhưng ko hẳn là mảng tức là không sử dụng được những phương thức đã học như là pop, shift, push, map, filter
// HTML Collection: ko sử dụng được forEach
// NodeList: Sử dụng được forEach

// Sự khác nhau giữa parentNode và parentElement
// parentElement có thể null
// document.documentElement -> lấy thẻ html
log(document.documentElement.parentElement); // null
log(document.documentElement.parentNode); // #document
