console.log('coconuts'.slice(4,7)) //nut

console.log('alkira'.indexOf("a")) //0

console.log('    thu   '.trim()) //thu

// lấy chiều dài mong muốn 
console.log(String(6).padStart(3, "0")); //006


let sentence = "Secretarybirds specialize";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize"]
console.log(words.join(". "));
// → Secretarybirds. specialize

//Destructuring là một cú pháp cho phép bạn gán các thuộc tính của một Object hoặc một Array.
var student1 = {
    id: 1,
    name: "thu",
}

// var id  = student.id

// object destructuring
var {id, name} = student1
console.log(id)

//Destructuring Arrays 
// Create variables from the Array items
// const year = date[0]
// const month = date[1]
// const day = date[2]
// Destructure Array values into variables
const [year, month, day] = date

console.log(year) // 2014
console.log(month) // 17
console.log(day) // 07
//rest parameters
function max(...numbers) {

}


