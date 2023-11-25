/* exercises 1: cho 1 mảng gồm nhiều giá trị 
[1,1000,false,null,"Nguyên","",undefined,"Javascript",[1,2,3],NaN,true] viết chương trình loại bỏ giá trị falsy ra khỏi mảng chỉ giữ lại giá trị truthy
*/

//build-in object
console.log("-----exercises 1-----");
const arr = [
  1,
  1000,
  false,
  null,
  "Nguyên",
  "",
  undefined,
  "Javascript",
  [1, 2, 3],
  NaN,
  true,
];
const falsy = arr.filter((item) => Boolean(item)); // Boolean(item) => trả về gtri true
// filter : lọc phần tử trong mảng theo điều kiện
console.log(falsy);

/* exercises 2: cho 1 mảng phức tạp [[1,2,3,[false,null]],[1,5,6,["Javascript"]],[88,90,[100]]]. Và kết quả mông muốn là [1,2,3,false,null,1,5,6,"javascript",88,90,100]
 */
console.log("-----exercises 2-----");
const arr2 = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["Javascript"]],
  [88, 90, [100]],
];
const a = arr2.flat(4);
console.log(a);

console.log("-----exercises 3-----");
/* exercises 3: đảo ngược số nguyên 123->321
 */
function reverse(value) {
  let number =
    parseInt(value.toString().split("").reverse().join("")) * Math.sign(value);
  // chuyển thành chuỗi -> tách chuỗi -> đảo chuỗi -> nối chuỗi => chuyển lại number
  // -> * -1 or 1
  return number;
}
console.log(reverse(-122334));

console.log("-----exercises 4-----");
/* kiếm tra từ 1 đến số nguyên cho trước chia hết cho 2 in ra "fizz"  chia hết cho 3 in ra
"Buzz" chia hết cho 2 và 3 in ra "FizzBuzz"
 */
function checkNumber(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 2 == 0 && n % 3 == 0) console.log(`${n} -> FizzBuzz`);
    else if (n % 2 == 0) console.log(`${n} -> Fizz`);
    else if (n % 3 == 0) console.log(`${n} -> Buzz`);
  }
}
console.log(checkNumber(30));

console.log("-----exercises 5-----");
/* exercises 5: cho 1 chuỗi bk đếm số lượng kí tự `vowels` co trong chuỗi
   vowels : u e o a i
 */
function vowels(str) {
  let sum = 0;
  let char = "ueoai";
  /*  
     c1:
     for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "u" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "a" ||
      str.charAt(i) == "i"
    )
      sum++;
  } */
  //c2
  for (const c of str.toLowerCase()) {
    // c chạy lần lượt trong mảng str ( c kí tự trong str)
    console.log(c);
    if (char.includes(c)) sum++; // mảng char có chứa kí tự c thì sum++
  }
  return sum;
}
console.log(vowels("Evondev"));



console.log("-----exercises 6-----");
/* exercises 6: cho một mảng các giá trị [1,2,3,1,1,1,2,5,6,7,4,5,6]. viết một function trả về một mảng với giá trị unique . kp [1,2,3,6,7] 
 */
function check(str) {
  let arr=[];
  if(!Array.isArray(str)) return arr;
  for(let i=0 ;i<str.length ;i++) {
    if(!arr.includes(str[i])) { // nếu arr không chứa phần tử thứ i của str
      arr.push(str[i]);
    }
  }
  return arr;
}
console.log([1,2,3,1,1,1,2,5,6,7,4,5,6])
console.log(check([1,2,3,1,1,1,2,5,6,7,4,5,6]));
console.log(check("abc"));




console.log("-----exercises 7-----");
/* exercises 7: viết function xử lý 1 mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào. vd ([1,2,3,4,5],2) -> [[1,2], [3,4], [5]]  : ghép một mảng 2 phần tử
 */
function splitArr(str, number) {
  let result = [];
  let index=0;
  while(index < str.length) {
    result.push(str.slice(index,number + index));
    // sao chép của mảng str từ index -> number+index rồi push vào result
    index=index+number;
  }
  return result;
}
console.log(splitArr([1,2,3,4,5],3)); 