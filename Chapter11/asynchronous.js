const request = () => {
    setTimeout(() => {
        console.log("asyn course")
    },2000)
    
}

console.log("Hello")
request()
console.log("end")

//Hello
// end
// asyn course

// Event Loop sẽ theo dõi call stack, khi call stack trống nó sẽ tiếp tục kiểm tra message queue. Lúc này, nếu phát hiện thấy có bất kỳ callback nào đang chờ đợi để được thực thi nó sẽ đẩy callback từ message queue vào call stack để nó được thực thi.