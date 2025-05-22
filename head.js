(function () {
  const headItems = [
    ['meta', { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' }],
    ['meta', { 'http-equiv': 'X-UA-compatible', content: 'IE=edge,chrome=1' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['meta', { name: 'description', content: '페이지설명' }],
    ['meta', { name: 'keywords', content: '검색키워드등록' }],
    ['meta', { name: 'classification', content: '검색사이트 카테고리 등록' }],
    ['link', { rel: 'shortcut icon', type:"image/x-icon", href: './assets/image/favicon.ico',  }],

    // jquery-1.12.4.min
    ['script', { src: './assets/script/lib/jquery-1.12.4.min.js' }],
    ['script', { src: './assets/script/lib/jquery-ui.js' }],
    ['link', { rel: 'stylesheet', href: './assets/style/jquery-ui.css' }],

    // summernote
    ['script', { src: './summernote/summernote-lite.min.js' }],
    ['link', { rel: 'stylesheet', href: './summernote/summernote-lite.min.css' }],
    ['script', { src: './summernote/lang/summernote-ko-KR.js' }],
    // ['script', { type: 'text/javascript', src: './assets/script/lib/jquery.bxslider.min.js' }],
    // ['link', { rel: 'stylesheet', href: './assets/style/slick.css', type: 'text/css', media: 'all' }],
    // ['link', { rel: 'stylesheet', href: './assets/style/slick-theme.css', type: 'text/css', media: 'all' }],
    // ['script', { src: './assets/script/lib/slick.js', type: 'text/javascript', charset: 'utf-8' }],
    // ['script', { src: './assets/script/lib/slick.min.js', type: 'text/javascript', charset: 'utf-8' }],

    // swiper
    ['link', { rel: 'stylesheet', href: './assets/style/swiper-8.4.7.min.css', type: 'text/css', media: 'all' }],
    ['script', { src: './assets/script/lib/swiper-8.4.7.min.js', type: 'text/javascript', charset: 'utf-8' }],

    ['script', { type: 'text/javascript', src: './assets/script/lib/echarts.min.js' }],
    // css
    ['link', { rel: 'stylesheet', href: './assets/style/basic.css', type: 'text/css', media: 'all' }],
    ['link', { rel: 'stylesheet', href: './assets/style/common.css', type: 'text/css', media: 'all' }],
    ['link', { rel: 'stylesheet', href: './assets/style/font.css', type: 'text/css', media: 'all' }],
    ['link', { rel: 'stylesheet', href: './assets/style/gap.css', type: 'text/css', media: 'all' }],
    ['link', { rel: 'stylesheet', href: './assets/style/layout.css', type: 'text/css', media: 'all' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.css', type: 'text/css', media: 'all' }]
  ];

  headItems.forEach(([tagName, attrs]) => {
    const el = document.createElement(tagName);
    for (const attr in attrs) {
      el.setAttribute(attr, attrs[attr]);
    }
    document.head.appendChild(el);
  });
})();