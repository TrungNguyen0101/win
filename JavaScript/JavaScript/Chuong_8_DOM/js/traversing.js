//1 selector.parentNode : truy xuất đến phần tử cha của nó
//2 selector.parentElement: giống trên
console.log(" ------.parentNode and .parentElement------")
const span=document.querySelector(".span")
console.log(span.parentNode);  // -> ra thẻ h3 và span
console.log(span.parentElement);
console.log(span.parentNode.parentNode);  // -> ra thẻ h3 và span + body
console.log(span.parentElement.parentElement);


console.log(" ------parentNode(parentElement).removeChild(selector)------")
//3 selector.parentNode(parentElement).removeChild(selector) : xóa node
// span.parentNode.removeChild(span) // truy xuất tới node cha rồi xóa node con


console.log(" ------nextElementSibling and previousElementSibling------")
//4 selector.nextElementSibling : truy xuất tới element kế tiếp
const nextSpan=span.nextElementSibling;
console.log(nextSpan);
//5 selector.previousElementSibling : truy xuất tới element phía sau nó
const previousLink=span.previousElementSibling;
console.log(previousLink);
console.log(" ------nextSibling and previousSibling------")
//4.1 .nextSibling    : có tính text node
console.log(span.nextSibling);
//5.1 .previousSibling
console.log(span.previousSibling);

console.log(" ------childNodes and children------")
//6 selector.childNodes :trả về list node bao gồm text node . khoảng trắng = text
console.log(span.childNodes); // [text, strong, text, strong.strong, text]
const span2=document.querySelector(".span2");
console.log(span2.childNodes); // [text]
//7 selector.children   :trả về list node không bao gồm text node
console.log(span.children);  // [strong, strong.strong]
console.log(span2.children); //  // []

console.log(" ------firstChild and firstElementChild------")
//8 .firstChild : lấy phần tử con đầu bao gồm text node
console.log(span.firstChild) // -> text -> 6
//9 .firstElementChild : lấy phần tử con đầu không bao gồm text node
console.log(span.firstElementChild) // -> strong -> 7

console.log(" ------lastChild and lastElementChild------")
//10 .lastChild and lastElementChild 
console.log(span.lastChild) //-> 6
console.log(span.lastElementChild) // -> 7