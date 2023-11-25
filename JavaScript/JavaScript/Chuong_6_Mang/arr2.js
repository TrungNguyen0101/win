const a=[0,1,2,3,4,5,6,7,8,9];
const b=a.slice();
console.log("-----arr.slice()-----"); // sao chép mảng ban đầu
console.log(b);
console.log(a.slice(2));  // sao chép từ vị trí index
console.log(a.slice(2,4));  // start,end-1
console.log(a.slice(-2));  // -a: vị trí cuối cùng đếm lến bắt đầu từ 1


console.log("-----arr.splice()-----"); // xóa or thay thế mảng ban đầu

/* const a1=a.splice(3);  // xóa từ 4 tới hết
console.log(a1); // hiển thị mảng được xóa
console.log(a);  // hiển thị mảng còn lại */


/* const a2=a.splice(1,3);
console.log(a2);   //-> 1,2,3
console.log(a);    //-> 0,4,5,6,7,8,9 */
 

const a2=a.splice(1,3,10,20,30);
console.log(a2);
console.log(a);


console.log("-----arr.sort()-----"); // sắp xếp
const random=[1,1000,6,3,9];
console.log(random.sort()); // 1,1000,3,6,9
// sắp xếp theo số đầu tiên của mỗi phần tử
// muốn sắp xếp như bình thường dùng function(callback)

// sắp xếp tăng dần muốn giảm dần làm ngược lại
const random2=random.sort(function(a,b){ 
    if(a>b) return 1; // đổi vị trí
    if(a<b) return -1; // không đổi vị trí
})
console.log(random2);
//viết nhanh
const random3=random.sort((a,b)=> a>b ? -1 : 1); // giảm dần
console.log(random3);


console.log("-----arr.find()-----"); // tìm kiếm thỏa dk nào đó
const random4=[1,7,10,6,3,9];
const find = random4.find((element) =>   element> 1);
console.log(find);


console.log("-----arr.map()-----"); // duyệt mảng trả về mảng mới với điều kiện
const list=[1,2,3,4,5,6];
const listNumber=list.map(function(value,index,array) {
    return value*2;
});
console.log(listNumber);
// viết gọn
const listNumber1=list.map((value,index,array) => value > 2 )
console.log(listNumber1);


console.log("-----arr.filter()-----"); // lọc các ptu thõa dk nào đó
const filter=[1,2,3,4,5,6];
console.log(filter);
const listFilter=filter.filter((value,index,array) => {return value>3 });
console.log(listFilter);



console.log("-----arr.some()-----"); // trả về true nếu thỏa >=1 đk , false nếu k thỏa
const some=[1,2,3,4,5,6];
const listSome=some.some((value) => value>3);
const listSome2=some.some((value) => value>6);
console.log(listSome); // true
console.log(listSome2);// false



console.log("-----arr.every()----`-"); // trả về true nếu thỏa all đk , false 1 đk ko thỏa
const every=[1,2,3,4,5,6];
const listEvery=every.every((value) => value>0);
const listEvery2=every.every((value) => value>1);
console.log(listEvery); // true
console.log(listEvery2);// false



console.log("-----arr.reduce()-----"); // gom các ptu trong mảng thành 1
const reduce=[1,2,3,4,5,6];
const listReduce=reduce.reduce(function(a,b){
    console.log(a,b);
    return a+b;
},0)
console.log(listReduce);



console.log("-----by value and by references-----"); // giá trị
const  value1=1;
const value2=1;
// by value
console.log(value1==value2);
console.log(value1===value2);
// by references
const by1=[1,2];
const by2=[1,2];
console.log(by1==by2);
console.log(by1===by2);


console.log("-----JSON-----"); // convert gtri sang dưới dạng string

console.log(JSON.stringify([1,2,3]));  // hiển thị ra kiểu string
console.log(JSON.parse("[1,2,3]"));    // hiển thị ra kiểu mảng
console.log("So sánh 2 mảng")
const arr1=[1,2];
const arr2=[1,2];
const arr1Str=JSON.stringify(arr1); // đổi qua kiểu string
const arr2Str=JSON.stringify(arr2);
console.log(arr1Str=== arr2Str);


console.log("-----clone-----"); // sao chép
const clone=[1,2,3,4,5,6,7,8,9,10];
//c1
const clone1=clone.slice();
clone1.pop();
console.log(clone); // mảng bđ
console.log(clone1);// mảng sao chép và sửa

//c2    
const clone2=[...clone];
console.log(clone2);


console.log("-----concat-----"); // gộp mảng
//c1
const concat1=[1,2];
const concat2=[3,4];
const concat3=[5,6];
const concat= concat1.concat(concat2,concat3);
console.log(concat);

//c2 
const concat4=[...concat1,...concat2,...concat3];
console.log(concat4);

console.log("-----destructuring-----"); // truy xuất mảng
const dst=["nguyen","tuan","nhu","yeu","ne"];
const [z,t,...rest]=dst;
console.log(t,z);
console.log(rest);

 
