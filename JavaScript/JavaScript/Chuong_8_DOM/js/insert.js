//1. elector.insertAdjacentText("Position","text") : chèn text vào vị trí position
const h3=document.querySelector("h3");
h3.insertAdjacentText("beforebegin","beforebegin")
h3.insertAdjacentText("afterbegin","afterbegin")
h3.insertAdjacentText("beforeend","beforeend")
h3.insertAdjacentText("afterend","afterend")


//2. element.insertAdjacentElement("position", node)
const strong=document.createElement("strong");
strong.classList.add("bold");
strong.textContent="nguyên "
h3.insertAdjacentElement("afterbegin", strong)


//3. element.insertAdjacentHTML("position", nodeHTML)

const template=
`<ul class="menu1">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>`;
document.body.insertAdjacentHTML("beforeend", template); // truyền template vào body