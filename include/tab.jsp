<%@ page contentType="text/html; charset=utf-8" %>
<script>
    var url = location.pathname;
    var tabEls = document.querySelectorAll('.tab_btn a');

    console.log(url);

    tabEls.forEach(el => {
        href = el.getAttribute('href');

        if(href == url){
            el.classList.add("on");
        }
    })
</script>

<script>
    // 바로 그자리에서 변할때
    $(".tab_btn li").click(function () {
        var thisIdx = $(this).index();
        $(".tab_btn li").removeClass("on");
        $(this).addClass("on");
        $(".tabCon").hide();
        $(".tabCon").eq(thisIdx).fadeIn();
    });
</script>