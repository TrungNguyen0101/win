// Khai báo Object
//c1 : Object literal
const object = {};
//c2 : object constructor
const object1= new Object();
//vd
const student={
    name: "Nguyen",
    age : 19,
    hi: function(){
        console.log("Hi");
    },
    "last-name": "Tuan", // key đặc biệt
};
//truy xuat object
//c1
console.log(student.name);
//c2
console.log(student["age"]);
console.log(student["last-name"]);

// thay đổi giá trị của object
student.age =20;
 // thêm
student.school="DUT";
student["school-x"]="IT";
// xóa
delete student["last-name"];

console.log(student);

// for in
for(let key in student) {
    console.log(`${key}:${student[key]}`);
}

// Object.keys()
const keys=Object.keys(student);
console.log(keys);
console.log(keys.length);
// Object.values()
const value=Object.values(student);
console.log(value);
console.log("------------- entries -------------")
// Object.entries() -> trả về một mảng nested
const entries=Object.entries(student);
console.log(entries);
// Object.assign(a,b) -> gộp mảng
const a={
    name:"Nguyen"
};
const b={
    lastName:"Pham"
}
//c1
const c=Object.assign(a,b); 
console.log(c);
//c2
const d={...a,...b};
console.log(d);

// Object.freeze()  -> đóng băng ngăn chặn chỉnh sữa object
const car={
    brand:"BMW"
};
const newCar=Object.freeze(car);
newCar.brand ="Nguyen";
console.log(newCar);

// Object.seal() -> cho phép chỉnh sửa nhưng không đc thêm


const user={
    userName: "Nguyen1",
    school:{
        name: "DUT",
        room:{
            name:"IT",
        },
    },
};
const newUser={...user};
newUser.userName="Tuan1";
console.log(user);
console.log(newUser);

// Object.assign
console.log("-----Object.assign-----");
console.log(user);
console.log(newUser);
// const newUser2=Object.assign({}, user); // sao cheps object user
// newUser2.school.name="tuan"; // user và newUser đều thay đổi theo

const newUser2 =JSON.parse(JSON.stringify(user));
newUser2.school.name="Bach Khoa";
console.log(newUser2);




// This
console.log("-----This-----")

const student2={
    name: "Nguyen",
    age : 19,
    hi: function(){
        console.log(`Phạm Trung Nguyên ${this.age}`);
    },
    "last-name": "Tuan", // key đặc biệt
    fullname:{
        name: "PTN",
    },
};

student2.hi();
console.log(student2.fullname?.name);
console.log(student2.fullname.name);  // lỗi nếu trong student2 ko có fullname.name


console.log("-----Destructuring Object-----")

const student3={
    name: "Nguyen",
    age : 19,
    hi: function(){
        console.log(`Phạm Trung Nguyên ${this.age}`);
    },
    "last-name": "Tuan", // key đặc biệt
    fullname:{
        name: "PTN",
    },
};
const { age,name,fullname,...rest} = student3;
console.log(name,age,fullname);
console.log(rest);

console.log("-----Use object in function-----")
// Không cần nhớ thứ tự
function object12(obj)
{
    console.log(obj.name, obj.age, obj.school);
};
const newObj12 = {
    name : "Nguyen",
    age : 20,
    school: "DUT",
};
object12(newObj12);
console.log("-----Use destructuring in function-----")
function object123({name, age, school})
{
    console.log(name, age, school);
};
object123({
    school: "DUT",
    age : 20,
    name : "Nguyen",
});