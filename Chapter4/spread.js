//Spread operator là ba dấu chấm ( ...), có thể chuyển đổi một mảng thành một chuỗi các tham số được phân tách bằng dấu phẩy.
//Spread with Arrays 
let num = [1,2,3]
let num2 = [4,5,6]
let allNum = num.concat(num2) //[ 1, 2, 3, 4, 5, 6 ]

//in spread
let all = [...num, ...num2]
console.log(all)  //[ 1, 2, 3, 4, 5, 6 ]
//Spread with Objects 

// const originalObject = { enabled: true, darkMode: false }
// const secondObject = Object.assign({}, originalObject)

// console.log(secondObject);//{enabled: true, darkMode: false}
const originalObject = { enabled: true, darkMode: false }
const secondObject = { ...originalObject }

console.log(secondObject);//{enabled: true, darkMode: false}
//rest parameters
//nếu chúng ta muốn args là một mảng bao gồm một số lượng đối số không xác định


function restTest(...args) {
    console.log(args)
  }
  
  restTest(1, 2, 3, 4, 5, 6);// [1, 2, 3, 4, 5, 6]