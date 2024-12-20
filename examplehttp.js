const http = require('http');

const server = http.createServer((req,res)=>{

    console.log('${req.method} request at ${req.url}');

    res.setHeader('Content-Type', 'text/plain');
    if(req.url === './'){
        res.statusCode = 200;
        res.end('visting request has been welcommed');
    }else{
        res.statusCode = 404;
        res.end('page not found');
    }
});

server.listen(3000, ()=>{console.log('http://localhost:3000/');});