// var config='this is a config';
// exports.config=config;//将config赋值给另一个变量，这两个变量是包含的关系，不是等价的关系，即exports.config包含config;

var tools={
    add:function (x,y) {
        return x+y;
    },
    sayHello:function () {
        return'hello world';
    }
};
module.exports=tools;
