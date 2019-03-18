//此处函数方法不能写在$(function(){})里面
    function urlParam() {
        var str=location.search.slice(1);//获得当前页面URL参数
        console.log(str);
        var arr=str.split("&");//把一个字符串分割成字符串数组
        var urlParamInfo=new Object();
        for(var i=0;i < arr.length;i++){
            var num=arr[i].indexOf("=");
            if(num>0){
                var name=arr[i].substring(0,num);
                var value=arr[i].substr(num+1);
                urlParamInfo[name]=decodeURIComponent(value);
            }
        };
        console.log(urlParamInfo);
        return urlParamInfo;
    }

