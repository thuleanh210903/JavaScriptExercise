function printTriangle() {
    for(let i = 1; i <=7; i++) {
        console.log("*".repeat(i))
    }
}



function fizzBuzz() {
    for(let i = 1; i<=100; i++){
        if(i%3==0){
            console.log("Fizz")
        }else if(i%5==0 && i%3!=0) {
            console.log("Buzz")
        } else if (i%5==0 && i%3==0) {
            console.log("FizzBuzz")
        } else {
            console.log(i)
        }
    }
} 

function chessBoard(size) {
    let chessBoard = ''
    for (let row = 0; row < size; row++) {
        for(let col = 0; col < size; col++) {
            if((row+col) %2 === 0 ){
                chessBoard+='#'
            }else {
                chessBoard+=''
            }
        }

        chessBoard+='\n'
    }

    return chessBoard
}
console.log(chessBoard(8))