$(function () {
    var flag=0
    $("#slect_btn").click(function () {
        if(flag==0){
            $("#slect_box").show();
            flag=1;
        }else {
            $("#slect_box").hide();
            flag=0;
        }
    });
    $("#slect_box").hover(function () {
        $("#slect_box").show();
        flag=1;
    },function () {
        $("#slect_box").hide();
        flag=0;
    })

    $(".slect_li").hover(function () {
        $(this).css("backgroundPosition","0 -247px");
        $(this).find("a").css({"color":"white","text-decoration":"none"});
        $(this).find(".content").css("display","block");
    },function () {
        $(this).css("backgroundPosition","0 -225px");
        $(this).find("a").css("color","#666");
        $(this).find(".content").css("display","none");
    })
})