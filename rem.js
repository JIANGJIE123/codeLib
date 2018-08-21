(function () {
   var  htmlDom=document.documentElement;//获取html标签
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        var whdef = 100/750;// 表示750的设计图,使用50PX的默认值
        var wH = window.innerHeight;// 手机窗口的高度
        var wW = window.innerWidth;// 手机窗口的宽度
        var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        htmlDom.style.fontSize=rem+"px";
    } else {
        window.onresize = function(){
            var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
            var wH = window.innerHeight;// 当前窗口的高度
            var wW = window.innerWidth;// 当前窗口的宽度
            var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
            htmlDom.style.fontSize=rem+"px";
        }
    }
}());