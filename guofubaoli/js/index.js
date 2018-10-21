// 滚轮
var _scroll =function () {
    if ($(window).scrollTop() > 1) {
        $(".top_box").addClass("topFixed");
    } else {
        $(".top_box").removeClass("topFixed");
    };
};
 $(".subtitle").animate({"margin-top":"80px"},"slow")
$(document).ready($(window).scroll(_scroll))