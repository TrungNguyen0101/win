// exercise 1: viết chương trình nhập vào năm sinh in ra số tuổi
function birth(x = 2000) {
  if (typeof x !== "number") return;
  const now = new Date();
  const nowYear = now.getFullYear();
  return nowYear - x;
}
console.log(`Tuổi của bạn là :${birth(2002)}`);



// exercise 2: viết chương trình đếm ngược thời gian theo từng giây( coutdown ) dựa vào thời gian đầu. Ví dụ thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo hết thời gian.

function countdown(minutes = 1) {
  let seconds = minutes * 60;
  let count = seconds;
  const timer = setInterval(function () { // hàm đếm liên tục
    count = count - 1;
    console.log(count);
    if (count === 0) {
      clearInterval(timer); // lệnh dường hàm setInterval
      alert("Bạn đã hết thời gian");
    }
  }, 1000);
}
// countdown(1);



// exercise 3: viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu so với thời gian hiện tại, ví dụ : bạn đang chat vs bạn A , và bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online '3 phút trước','2 tháng trước'

function timeSince(date) {
    const now = new Date();
    const yourDay= new Date(date); // truyền ngày muốn nhập vào
    // lấy ra số khoảng cách giây giữa tg bây giờ và tg nhập vào 
    const seconds= Math.floor((now.getTime() - yourDay.getTime()) / 1000); 
    console.log(seconds);
    //1 năm  = 365*24*60*60 = 31536000
    //1 tháng= 31*24*60*60  = 2678400
    //1 tuần = 7*24*60*60   = 604800
    //1 ngày = 24*60*60     = 86400
    //1 giờ  = 6*60         = 3600
    if(seconds<0){
        alert("Thời gian bạn nhập không đúng !!!");
        return;
    }
    let timer = seconds / 31536000 ;
    if(timer >1){
        console.log(`${Math.round(timer)} năm trước`)
        return;  // lệnh để dừng
    }
    timer = seconds / 2678400 ;
    if(timer >1){
        console.log(`${Math.round(timer)} tháng trước`)
        return;
    }
    timer = seconds / 604800 ;
    if(timer >1){
        console.log(`${Math.round(timer)} tuần trước`)
        return;
    }
    timer = seconds / 86400 ;
    if(timer >1){
        console.log(`${Math.round(timer)} ngày trước`)
        return;
    }
    timer = seconds / 3600 ;
    if(timer >1){
        console.log(`${Math.round(timer)} giờ trước`)
        return;
    }
    timer = seconds / 60 ;
    if(timer >1){
        console.log(`${Math.round(timer)} phút trước`)
        return;
    }
}
timeSince("Tue Oct 26 2021 21:00:00 GMT+0700 (Giờ Đông Dương)");