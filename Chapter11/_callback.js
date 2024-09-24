function readFile(filename, callback) {
    setTimeout(()=>{
        const data = "This file is read"
        callback(data)
    },2000)
}

function processFile(data) {
    console.log(data)
}

readFile("file.txt", processFile)