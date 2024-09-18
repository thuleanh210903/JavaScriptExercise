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

//
const filtered = arr.filter((num) => num > 2); // [3 4]
console.log(filtered);

const mapped = arr.map((num) => num + 1); // [2,3,4,5]
console.log(mapped)


const sum = arr.reduce((total, value) => total + value, 0);
console.log(sum) // 10


let name = 'Alkira'
let nameArray = Array.from(name)
console.log(nameArray) //[ 'A', 'l', 'k', 'i', 'r', 'a' ]

// map: có 1 mảng, xử lý từng biến trong mảng theo cùng 1 cách, trả về các giá trị say xử lý, số lượng đúng bằng số lượng ban đầu của array
// filter: lấy các phần tử theo 1 tiêu chuẩn nhất định
// reduce: sử dụng giá trị trong mảng để tạo ra giá trị hoàn toàn mới
