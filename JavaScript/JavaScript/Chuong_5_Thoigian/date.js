// build-in object : các hàm có sẵn trong js
const now = new Date(); //c1    
console.log(now);
console.log(new Date(0));   // thời gian khởi tạo
console.log(now.getTime()); // tính từ tg khởi tạo đến bh
console.log("--------");
// Các cách khởi tao date
console.log(new Date(1639838965153)); //c2
console.log(new Date("Tue Oct 26 2021 16:44:40 GMT+0700 (Giờ Đông Dương)")); //c3
console.log(new Date(2021, 0, 1, 12, 12, 12, 10)); //c4
console.log("--------");
// các hàm get
const birthday = new Date(2002, 0, 1);
console.log(birthday.getFullYear()); // chỉ in ra năm
console.log(birthday.getMonth()); // chỉ in ra tháng 0: tháng 1
console.log(birthday.getDate()); // chỉ in ra ngày của tháng
console.log(birthday.getDay()); // chỉ in thứ
console.log(birthday.getHours()); // chỉ in giờ
console.log(birthday.getMinutes()); // chỉ in phút
console.log(birthday.getSeconds()); // chỉ in giấy
console.log(birthday.getTime());

console.log("--------");
// cac ham set
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(2003);
console.log(`My birthday: ${birthday}`);

console.log("----Cac ham khac ----");
// cac ham khac
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleDateString("vi-VI"));
console.log(now.toISOString());

// bài tập
console.log("--------");
console.log(
  new Date(
    "Sat Dec 18 2021 21:55:32 GMT+0700 (Indochina Time)"
  ).toLocaleDateString("vi-VI")
);  // -> 27/10/2021
const myTime= new Date("Wed Oct 27 2021 16:20:14 GMT+0700 (Giờ Đông Dương)");
const myYear= myTime.getFullYear(); // 2011
const myMonth= myTime.getMonth()+1; // 10
const myDate= myTime.getDate(); // 27
// nếu tháng nhỏ hơn 10 thì thêm 0 vào trước 
//vd 05/06/2021
const fixMonth= myMonth<10 ? "0" : "";
const fixDate= myDate<10 ? "0" : "";
console.log(myYear, myMonth, myDate);
console.log(`${fixDate}${myDate}/${fixMonth}${myMonth}/${myYear}`);


//setTimeout vs setInterval
console.log("----------");
//setTimeout
// setTimeout(function(){;
//     alert("Xuất hiện sau 3 giây");
// }, 3000);
//setInterval
const timer=setInterval(function(){
    console.log("Hi!!!");
},1000);
console.log(timer);
clearInterval(timer);