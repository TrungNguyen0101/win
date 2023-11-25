// window.addEventListener("load") : website đã load xong -> chạy  --> load sau
// web fully loaded
window.addEventListener("load", function(e) {
    console.log("Your Web Load")
})

// document.addEventListener("DOMContentLoaded") : HTML load -> chạy  --> load trước
document.addEventListener("DOMContentLoaded", function(e){
    console.log("HTML Load")
})
 