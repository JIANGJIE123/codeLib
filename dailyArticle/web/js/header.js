var body=document.body;
var header=`
    <header class="clearFloat">
    <div class="hd_l clearFloat">
        <div class="logo"><a href="index.html">每日一文</a></div>
        <ul class="nv clearFloat">
            <li><a href="index.html" class="default" id="nvArticle">文章</a></li>
            <li><a href="voice.html" class="default" id="nvVoice">声音</a></li>
            <li><a href="bookcase.html" class="default" id="nvBookcase">书架</a></li>
        </ul>
    </div>
    <div class="hd_r">
        <a href="" class="hd_r_link">
            <em class="hd_r_icon"></em>
            <span class="hr_r_text">加关注</span>
        </a>
    </div>
</header>
`;
body.innerHTML=header;