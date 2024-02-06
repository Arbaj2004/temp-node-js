const http=('http')

const server=http.createServer((req,res)=>{
    res.write("hello welcome to the home page");
    res.end();
})
server.listen(5000)