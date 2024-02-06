const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("this is homepage")
    }
    if(req.url=='/about'){
        res.end("this is about page");
    }   
    res.end(
        `<h1>404 PAGE NOT FOUND</h1>
        <a href="/">back to home</a>`
    )
});

server.listen(8000)