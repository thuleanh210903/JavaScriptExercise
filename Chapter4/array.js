//array
let book = [];

function addBook(item) {
  book.push(item);
}

addBook('Good')

function removeLastBook(item) {
  if (item) {
    book.pop(item);
  } else {
    console.log("Error");
  }
}

function addFirstBook(item) {
  book.unshift(item);
}

function removeFirstBook(item) {
  book.shift(item);
}

const arr = [1, 2, 3, 4];

arr.forEach((item) => {
  console.log(item);
}); // 1 2 3 4

// check sự tồn tại của item trong mảng
console.log(arr.includes(3)); //true
console.log(arr.includes(7)); //false

// filter tạo 1 arr mới chứa phần tử đạt điều kiện
const filtered = arr.filter((num) => num > 2); // [3 4]
console.log(filtered);

// transform 1 arr bằng cách apply 1 hàm đến từng phần tử và tạo 1 mảng mới chứa phần từ trả về
const mapped = arr.map((num) => num + 1); // [2,3,4,5]
console.log(mapped)


// build 1 value bằng cách take repeat phần từ đơn từ mảng và combine với current value 
// 1 phần từ mảng, combine function và giá trị khởi đầu
const sum = arr.reduce((total, value) => total + value, 0);
console.log(sum) // 10


let name = 'Alkira'
let nameArray = Array.from(name)
console.log(nameArray) //[ 'A', 'l', 'k', 'i', 'r', 'a' ]

// map: có 1 mảng, xử lý từng biến trong mảng theo cùng 1 cách, trả về các giá trị say xử lý, số lượng đúng bằng số lượng ban đầu của array
// filter: lấy các phần tử theo 1 tiêu chuẩn nhất định
// reduce: sử dụng giá trị trong mảng để tạo ra giá trị hoàn toàn mới


//some take a test function and tells you whether that function returns true for any of the elements in the array