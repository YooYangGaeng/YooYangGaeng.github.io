document.addEventListener('DOMContentLoaded', function () {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.innerHTML = this.responseText;
                    // 외부 파일을 가져온 후에 헤더와 푸터의 클릭 이벤트를 다시 바인딩합니다.
                    bindHeaderFooterEvents();
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

function bindHeaderFooterEvents() {
    // 헤더의 클릭 이벤트를 여기서 다시 바인딩합니다.
    var headerMbtn = document.querySelectorAll('#header .m_btn');
    var headerClose = document.querySelectorAll('#header .gnb .close');
    var headerDepth = document.querySelectorAll('#header .menu_wrap > ul > li > a');
    headerMbtn.forEach(function (link) {
        link.addEventListener('click', function () {
            // 클릭 이벤트 핸들러
            $("#header .gnb").addClass("active");
            $(".gnb_bg").fadeIn();
            //console.log('test');
        });
    });
    headerClose.forEach(function (link) {
        link.addEventListener('click', function () {
            $("#header .gnb").removeClass("active");
            $(".gnb_bg").fadeOut();
        });
    });
    headerDepth.forEach(function (link) {
        link.addEventListener('click', function () {
            var $depth = $(this).siblings('.depth02');
            $(this).addClass('active');
            $(this).siblings('.depth02').slideDown();
            $(this).parent().siblings().find('.active').removeClass('active');
            $('.depth02').not($depth).slideUp();
        });
    });

}
