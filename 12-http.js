const http = require('http')

const server = http.createServer((req,res)=>{
    // res.write("Welcome to our home page")
    // res.end()
    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    if(req.url === '/about'){
        res.end("Here is our short history")
    }
    res.end(`
        <h1>opps!!<h1>
        <p>we can't find the page</p>
        <a href='/'>back to home</a>
    `)    
})

server.listen(5000)