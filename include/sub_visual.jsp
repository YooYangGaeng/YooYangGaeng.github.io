<%@ page contentType="text/html; charset=utf-8" %>
<div class="sub_visual">
    <div class="inner">
        <div class="txt">
            <p></p>
            <h2></h2>
        </div>
        <div class="sub_path">
            <a href="/" class="home">
                <svg>
                    <use href="#home">
                </svg>
                <span>home</span>
            </a>
        </div>
    </div>
</div>
    
<script src="/js/sub_visual.js"></script>
<script>
    var href = document.querySelectorAll('header ul li a');
    var url = window.location.pathname;
    var param = window.location.search;
    var category = "scategory_fk";
    var fileName = url.substring(url.lastIndexOf('/') + 1);
    var isForDev = fileName == "read.jsp" || fileName == "edit.jsp" || fileName == "write.jsp" || fileName == "password.jsp" || fileName == "call.jsp" || fileName == "list.jsp" || fileName == "consult.jsp" || fileName == "detail.jsp" || fileName == "admission.jsp";
    
    // idForDev 페이지 index 페이지와 동일하게 설정
    if(isForDev && !hasHref(href, url)){
        url = url.substring(0, url.lastIndexOf('/') + 1) + "index.jsp";
    }

    href.forEach(el => {
        var link = el.getAttribute('href');
        if(link.includes(category)){
            link = link.split("?")[0];
        }
        
        if(url == link){
            if(el.nextElementSibling == null || hrefCount() == 1){
                var idx = 1;
                var path = [];

                // 페이지별 텍스트 설정
                // textChange(el);

                // 1depth 텍스트 고정
                if(el.closest('.depth02')){
                    var depth01Href = el.closest('.depth02').previousElementSibling;
                } else {
                    var depth01Href = el;
                }
                
                textChange(depth01Href);
                
                // sub_visual background
                var depth01 = depth01Href.parentElement;

                document.querySelectorAll('.gnb > ul > li').forEach((el, i) => {
                    var path = "";
                    if(el == depth01){
                        path = '/img/sub_visual'+String(i+1).padStart(2,"0")+'.jpg';
                        if(imgExist(path) == '404'){
                            path = '/img/sub_visual.jpg';
                        } 

                        document.querySelector('.sub_visual').style.backgroundImage = "url(" + path + ")";
                    }
                })

                pathMaker(idx, el, path);
                path.reverse();
                path.forEach((pl, idx)=> {
                    pl.classList.add("depth0"+(idx+1));
                    document.querySelector('.sub_path').append(pl);
                })
            }
        }
    })
    
    // sub_path open & close;
    // $(".sub_path [class^='depth'] p").on('click', function(){
    //     $(this).next().slideToggle(200);
    //     $(this).parent().siblings().find('ul').slideUp(200);
    // });

</script>