const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log("data has been generated")
        res.write("<h1>NODEJS</h1>")
        res.write("<p>NodeJS Handson1</p>")
        res.end()
    }

    else if(req.url === '/json1'){
        console.log("JSON1");
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }

    else if(req.url ==='/json2'){
        console.log("JSON2");
        req.write(JSON.stringify(['JSON', 'Data']))
        res.end();
    }
  
})

server.listen(8000,()=>{
    console.log("Application is running")
})