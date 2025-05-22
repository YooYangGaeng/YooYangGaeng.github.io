<header id="header">
    <h1 class="logo">
        <a href="/reen/index.php">Publish Guide</a>
    </h1>
    <div class="gnb">
        <ul>
            <li><a href="/reen/plugin.php">plugin</a></li>
            <li>
                <a href="javascript:;">galley</a>
                <ul class="depth02">
                    <li><a href="/reen/responsize.php">responsize</a></li>
                    <li><a href="/reen/img-upload.php">img upload</a></li>
                </ul>
            </li> 
            <li><a href="/reen/gsap.php">gsap</a></li> 
            <li><a href="/reen/column-count.php">column-count</a></li> 
            <li><a href="/reen/button.php">button style</a></li> 
            <li><a href="/reen/print.php">print</a></li> 
            <li><a href="/reen/sign.php">전자서명</a></li> 
            <li><a href="/reen/swiper.php">swiper</a></li> 
        </ul>
    </div>
</header>
<script>
    window.addEventListener("load", function(){
     
        // 모바일 메뉴
        $("#header .gnb > ul > li > a").on("click",function(){
            if(!$(this).parent().hasClass("depth01")){
                // 2depth가 있을 경우
                $(this).parent("li").toggleClass("on").siblings().removeClass("on");
                $(this).next(".depth02").stop(true,true).slideToggle().parent("li").siblings().find(".depth02").slideUp();
                //return false;
            }
        });
    })
</script>