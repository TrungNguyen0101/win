//--1. selector.getAttribute(Attribute) : lấy ra giá trị của attribute của selector
console.log(" ----------- selector.getAttribute(Attribute) -----------");
const link = document.querySelector(".link"); // 1 node elector
console.log(link.getAttribute("href")); // lấy ra địa chỉ href trong selector .link

const li = document.querySelectorAll(".item"); // lấy nhiều giá trị
console.log(li); // trả về nodeList
li.forEach((item) => {
  console.log(item.getAttribute("class"));
});

//--2. selector.setAttribute(Attribute,value) : set giá trị cho attribute nào đó của selector
console.log(" ----------- selector.setAttribute(Attribute,value) -----------");
link.setAttribute("target", "_bank"); // thêm target="_bank" cho selector link
const listLink = document.querySelectorAll("a.link"); // lấy all selector của thẻ a có class =" link"
console.log(listLink);
listLink.forEach((link) => {
  link.setAttribute("target", "_bank");
});

//--3.selector.removeAttribute(Attribute) : xóa attribute của selector
console.log(" ----------- selector.removeAttribute(Attribute) -----------");
const p = document.querySelector("#spinner"); // lấy selector có id="spinner" ra
p.removeAttribute("style"); // xóa style

//--4.selector.hasAttribute(Attribute) : kiểm tra selector có attribute nào đó hay không có ->true
console.log(" ----------- selector.hasAttribute(Attribute) -----------"); // ktra
console.log(p.hasAttribute("class")); // kt selector p có attribute class hay không
console.log(p.hasAttribute("id"));