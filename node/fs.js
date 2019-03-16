var fs=require('fs');
//1.判断是目录还是文件
fs.stat('demo',function (err,states) {
    if(err){
        console.log(err);
        return false;
    };
    console.log("是文件："+states.isFile());//false
    console.log("是目录:"+states.isDirectory());//true
});
fs.stat('node.txt',function (err,states) {
    if(err){
        console.log(err);
        return false;
    };
    console.log("是文件："+states.isFile());
    console.log("是目录："+states.isDirectory());
});
//2.创建文件夹
// fs.mkdir('server',function (err,state) {
//     if(err){
//         console.log(err);
//         return false;
//     };
//     console.log("默认创建目录成功");
// });
//3.写入文件
fs.writeFile('testWrite.txt','2测试写入','utf-8',function (err) {
    if(err){
        console.log(err);
        return false;
    };
    console.log('文件写入成功');
});
//4.文件追加
fs.appendFile('testWrite.txt','\n追加信息11',function (err) {
    if(err){
        console.log(err);
        return false;
    };
    console.log("追加文件成功");
})