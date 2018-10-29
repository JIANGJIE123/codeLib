// 滚轮
var _scroll =function () {
    if ($(window).scrollTop() > 1) {
        $(".top_box").addClass("topFixed");
    } else {
        $(".top_box").removeClass("topFixed");
    };
    $(".set_top").click(function () {
        console.log("jiangjie")
        $('html,body').stop().animate({"scrollTop":"0px"},1000);
        return false;
    })
};
 $(".subtitle").animate({"margin-top":"80px"},"slow")
$(document).ready($(window).scroll(_scroll))