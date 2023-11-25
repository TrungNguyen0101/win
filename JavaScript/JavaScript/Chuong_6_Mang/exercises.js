// EX 1: đảo ngược 1 chuỗi. Ví dụ : "phạm trung nguyên" -> "nguyên trung phạm"
function reverseStr(str) {
  if (!str) return null;
  const arr = str.split(" ").reverse().join(" ");
  // tách chuỗi --> đảo mảng  --> nối mảng
  return arr;
}
console.log("------exercise 1------")
console.log(reverseStr("Phạm Trung Nguyên"));

// EX 2: đảo ngược từng kí tự của 1 chuỗi . Ví dụ : love -> evol
function reverseWord(word) {
  if (typeof word !== "string") return null;
  const arr = word.split(" "); // [I,Love,You]
  console.log(arr);

  // duyệt từ đầu tới cuối mảng -> tách ptu của  mảng theo "" thành nhìu mảng
  // -> đảo từng ptu của mỗi mảng ->nối thành 1 mảng
  // [i],[Love],[You] ->
  const arr1 = arr.map((value) => value.split("").reverse().join("")).reverse().join(" ");
  return arr1;

}
console.log("------exercise 2------")
console.log(reverseWord("I Love You"));




// EX 2: In hoa chữ cái đầu tiên của mỗi từ vd pham trung nguyen -> Pham Trung Nguyen
function upperCase(word= ""){
  if(word.length === 0) return null;
  let newWord=word.toLowerCase().charAt(0).toUpperCase(); // in hoa chữ cái đầu
  let otherWord=word.toLowerCase().slice(1); // lấy từ vtri 1 tới hết
   return `${newWord}${otherWord}`;

}
function upperCaseStr(str) {
  if (typeof str !== "string") return null;
  const arr= str.split(" "); // tách từng chữ ra
  const map= arr.map(function(value)
  {
  return upperCase(value);
  }).join(" ")
  return map;
}
console.log(upperCaseStr("PHẠM TrUng nguyên"))