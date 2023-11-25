//BT1  viết hàm fun so sánh 2 số tìm ra số lớn hơn
function compare(a=0,b=0){  // compare : so sánh
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log("Bạn đã nhập dữ liệu sai,vui lòng nhập lại !");
        return; // bỏ return để dừng lại
    } 
   return Math.max(a,b);
}
console.log(compare(123,"1234"));


//BT2 In hoa chữ cái đầu trong chữ vd : nguyen -> Nguyen , TUAN -> Tuan
function upperCase(word= ""){
    if(word.length === 0) return null;
    let newWord=word.toLowerCase().charAt(0).toUpperCase(); // in hoa chữ cái đầu
    let otherWord=word.toLowerCase().slice(1); // lấy từ vtri 1 tới hết
     return `${newWord}${otherWord}`;

}
console.log(upperCase("NGUYEN"));


// BT3 Viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả
// của hàm compare đã viết ở trên 