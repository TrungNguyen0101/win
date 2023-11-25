//1. document.title
console.log(document.title)
//2. document.head
console.log(document.head)

//tạo thẻ
//  <meta name="viewport" content="width=device-width, initial-scale=1.0">
const meta=document.createElement('meta');
// meta.setAttribute("name","content");
// meta.setAttribute("viewport","width=device-width, initial-scale=1.0")
// document.head.appendChild(meta);
const head=document.getElementsByTagName("head");
console.log(head)
head[0].appendChild(meta);


//parentNode.insetBefore(newNode,existingNode) : duy chuyển newNode ra trước existingNode
// parentNode: node cha
const ul=document.querySelector("ul");
document.body.insertBefore(ul,document.querySelector("h1"))
// gần giống insertAdjacentElement("position",node)
// khác chỗ insertAdjacentElement chỉ truyền 4 vị trí

// replaceChild
// node.replaceChild(newnode, oldnode);
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));

// html body head title
// html: document.documentElement
// body: document.body
// head: document.head
// title: document.title
