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
$(".ft_serv").click(function () {
    var state=$(this).find(".ft_show").css("display").split("");
    if(state.length===4){
        $(this).find(".ft_show_i").css("transform","rotate(90deg)")
        $(this).find(".ft_show").show("slow");
    }else {
        $(this).find(".ft_show_i").css("transform","rotate(0deg)")
        $(this).find(".ft_show").hide("slow");
    }

})

$(".nv_come").hover(function () {
    $(".down").show();
},function () {
    $(".down").hide();
})