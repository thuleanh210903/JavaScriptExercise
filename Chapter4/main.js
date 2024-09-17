//array
let book = []

function addBook(item) {
    book.push(item)
}

function removeLastBook(item) {
    if(item) {
        book.pop(item)
    }else {
        console.log("Error")
    }
}

function addFirstBook(item) {
        book.unshift(item)
}

function removeFirstBook(item) {
    book.shift(item)
}

book.splice()

