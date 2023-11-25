// bt1 : viết ct kiểm tra value có phải là object đúng ko ?
console.log("------------ BT1 ------------ ");
const a = {};
const b = [];
const c = null;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null);
  // Array.isArray(value) : kt có phải là mảng hay không
  return true;
  return false;
}
console.log(isObject({}));
console.log(isObject([]));
console.log(isObject(null));




// bt2 : {a:1 , b:2} => [["a",1], ["b",2]]
console.log("------------ BT2 ------------ ");
function objectToArray(object) {
  if (!isObject(object)) return;
  // c1
  // return Object.entries(object);

  //c2
  //                 Object.keys(object) : trả về 1 mảng chứa toàn bộ keys
  //   const value = Object.keys(object).map((key) => [key, object[key]]);
  //   return value;

  //c3
  let result = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) // kt object có chứa key hay không
        result.push([key, object[key]]);
  }
  return result;
}
console.log(objectToArray({ a: 1, b: 2 }));




// bt3: ({a:1, b:2}, "b") ==> {a:1} : xóa key theo yc
console.log("------------ BT3 ------------ ");
function without(object, ...key) { // rest parameter
    const newObject= {...object}; // spread operator
    key.forEach( item => {
        delete newObject[item];
    });
    console.log(object);
    return newObject;
}
console.log(without({ a: 1, b: 2, c:3}, "c","b"));








// bt 4 : so sanh object 
// VD: {a:1, b:2} and {a:1, b:2} => true
// VD: {a:1, b:2} and {a:1, b:3} => false
function isEqualObject(obj1, obj2) {
    const newObj1= Object.keys(obj1);  // tra ve mang chua all key
    const newObj2= Object.keys(obj2);
    if(newObj1.length !== newObj2.length) return false;
    const result= newObj1.every( key => obj1[key] === obj2[key]); // ss value,dung all tra ve true
    return result;
}
console.log(isEqualObject({a:1, b:2}, {a:1, b:2} ))
console.log(isEqualObject({a:1, b:2}, {a:1, b:3} ))
console.log(isEqualObject({a:1, b:2}, {a:1, b:2, c:3} ))