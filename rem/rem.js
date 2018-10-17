getRem(375,100);
window.onresize = function () {
    getRem(375,100);
}

function getRem(designWith,num) {
//获取文档节点
    var htmlDom=document.getElementsByTagName("html")[0];

// 获取设备分辨率
    var deviceWith=document.documentElement.clientWidth || document.body.clientWidth;

//设置html字体
    htmlDom.style.fontSize=deviceWith / designWith * num +"px";

    console.log("设备分辨率："+deviceWith);
    console.log("rem:"+htmlDom.style.fontSize);
}

