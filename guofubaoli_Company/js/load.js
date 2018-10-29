(function () {
    console.log("jiangjie")
    $("body").append(`<div class="load">
        <div class="load_img">
            <img src="imgs/logo-guofubaoli.png" alt="">
        </div>
        <div class="load_line" style="width: 0%;height: 5px;background:#cf9455;margin-top:40px"></div>
    </div>`);
    $(".load").css({"position": "absolute","top":"50%","left": "50%","transform": "translate(-50%,-50%)","width": "100%"})
    $(".load_img").css("text-align", "center");
    $(".load_line").animate({width:'100%'},'1s','linear');
    setTimeout(function(){
        $(".load").fadeOut();
        $(".wrap").fadeIn();
        initVeiw();
        }, 1000);
}())
