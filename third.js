const http =require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/home'){
        res.write('<html>');
        res.write('<head><title>home page</title></head>');
        res.write('<body><h1>welcome to homepage</h1></body>');
        res.write('</html>');
        res.end();
    }
    else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>home page 2</title></head>');
        res.write('<body><h1>welcome to aboutpage</h1></body>');
        res.write('</html>');
        res.end();
    }
    else{
        res.write('<html>');
        res.write('<head><title>home page 2</title></head>');
        res.write('<body><h1>welcome to Node js page</h1></body>');
        res.write('</html>');
        res.end();
    }
})
server.listen(3000);