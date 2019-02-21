$(".default").each(function () {
    var flag=$(this).hasClass("activenv");
    if(flag){
        $(this).removeClass("activenv");
    }
});
$("#nvBookcase").addClass("activenv");