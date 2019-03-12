//1.创建一个服务器   2.创建一个tools  3.服务器引入tools
var http = require('http');
var tools = require('./tools');
var bar = require('bar');
var nav=require('nav');

console.log(nav);
console.log(tools.add(1,2));
console.log(tools.sayHello());
console.log(bar);

var app= http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write("你好，node.js");

    res.end();
});
app.listen(8081,'127.0.0.1');
