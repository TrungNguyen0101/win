// bài tập 1: sao chép mảng dùng for
const number=[1,2,3,4,5,6,7,8,9,10];
let copy=[];
for(let i=0 ; i<number.length;i++) {
    // push thêm vào cuối
    copy.push(number[i]);
}
console.log(copy);

// bài tập 2: đảo từ
let str="I Love Như";
let result="";
for(let i=str.length -1 ; i >= 0;i--) {
    // push thêm vào cuối
//    console.log(result);
   result+=str[i];
}
console.log(result);

console.log("-----For of-----")
let a=[];
for(let value of number)
{
    value+=10;
    a.push(value);
}
console.log(a)