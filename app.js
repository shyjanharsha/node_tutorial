// //started operating system process
// console.log("first")
// setTimeout(() =>{
//     console.log("second")
// },0)
// console.log("third")

// // completed and exited system process

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Welcome to our home page")
    res.end("Hello World")
})

server.listen(5000, ()=>{
    console.log('server listening on port : 5000')
})