$(".list_box").hover(function () {
    $(this).find(".mask").css("display","block")
},function () {
    $(this).find(".mask").css("display","none")
});

$(".default").each(function () {
    var flag=$(this).hasClass("activenv");
    if(flag){
        $(this).removeClass("activenv");
    }
});
$("#nvVoice").addClass("activenv");
