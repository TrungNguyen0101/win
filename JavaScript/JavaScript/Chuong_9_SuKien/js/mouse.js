function log(message) {
    console.log(message);
}
const button = document.querySelector(".button");
// mousemove, mouseover, mouseenter, mouseleave

// 1.mousemove
// selector.addEventListener("mousemove", function()) : chạy khi di chuyển trên 1 phần tử -> nhiều lần
/* button.addEventListener("mousemove",function(e) {
    log("mousemove")
}) */


// 2.mouseover
/* // selector.addEventListener("mouseover", function()) : chạy khi di chuyển vào 1 phần tử và con phần tử
button.addEventListener("mouseover",function(e) {
    log("mouseover")
}) */


/* // 3.mouseenter
// selector.addEventListener("mouseenter", function()) : chạy khi di chuyển vào 1 phần tử -> 1 lần
button.addEventListener("mouseenter",function(e) {
    log("mouseenter")
}) */



// 4.mouseleave
// selector.addEventListener("mouseleave", function()) : chạy khi di chuyển vào 1 phần tử và thoát ra 
/* button.addEventListener("mouseleave",function(e) {
    log("mouseleave")
}) */



// 5.pageX, clientX, pageY, clientY 
// clientY: lấy tọa độ của viewport
// pageY  : lấy tọa độ của document
// selector.addEventListener("mouseleave", function()) : chạy khi di chuyển vào 1 phần tử và thoát ra 
document.addEventListener("mousemove",function(e) {
    log(`PageY   : ${e.pageY}`);
    log(`clientY : ${e.clientY}`);
})


