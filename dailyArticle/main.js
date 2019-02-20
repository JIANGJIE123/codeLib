const http=require('http');
const fs=require('fs');
const url=require('url');

http.createServer(function (request,response) {
    // response.writeHead(200,{'Content':'text/plain'});
    // response.end('hello node\n')
    var pathname=url.parse(request.url).pathname;
    console.log("request for "+pathname+" received.");
    fs.readFile(pathname.substr(1),function (err,data) {
        if(err){
            console.log(err);
            response.writeHead(404,{'Content-Type':'text/html'});
        }else {
            var type=pathname.substr(pathname.lastIndexOf(".")+1,pathname.length);
            console.log(type);
            response.writeHead(200,{'Content-Type':'text/'+type});
            response.write(data.toString());
        };
        response.end();
    })
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');