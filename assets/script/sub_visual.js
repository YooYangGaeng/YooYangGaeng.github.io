function pathMaker(idx, target, path) {            
    var parent = target.parentElement.parentElement;
    var is_gnb = parent.parentElement;
    var next = parent.previousElementSibling;

    var depth = document.createElement('div');
    var depthName = document.createElement('p');
    var depthChild = document.createElement('ul');

    // 선택된 항목;
    depthName.textContent = target.textContent;

    // list 추가
    var list = parent.querySelectorAll(':scope > li:not(.hide) > a');
    var listHtml = "";

    list.forEach(el => {
        listHtml += "<li><a href="+el.getAttribute('href')+">"+el.textContent+"</a></li>";
    })

    depth.append(depthName);
    // depthChild.innerHTML = listHtml;
    // depth.append(depthChild);
    
    path.push(depth);

    if(!is_gnb.classList.contains('gnb')){
        return pathMaker(idx+1, next, path);
    }
    
    return path;
}


function getParameter(search, param){
   var target = new URLSearchParams(param).get(search);

   return target;
}

function hasHref(href, url){
    var count = 0;

    href.forEach(el => {
        if (el.getAttribute('href') == url) {
            count += 1;
        }
    })

    return count > 0 ? true : false;
}

function textChange(target, sub = 'data-sub', desc = 'data-desc'){

    if(target.getAttribute(sub)){
        document.querySelector('.sub_visual h2').textContent = target.getAttribute(sub)
        if(target.getAttribute(desc))
        {
            document.querySelector('.sub_visual p').innerHTML = target.getAttribute(desc);
        } else {
            document.querySelector('.sub_visual p').textContent = target.textContent;
        }
    } else {
        document.querySelector('.sub_visual h2').textContent = target.textContent;
        if(target.getAttribute(desc)){
            document.querySelector('.sub_visual p').innerHTML = target.getAttribute(desc);
        }
    }
}

function imgExist(path) {
    var req = new XMLHttpRequest();
    req.open('GET', path, false);
    req.send(null);

    return req.status;
}

function hrefCount(){
    var count = 0;
    href.forEach(el => {
        if(url == el.getAttribute('href')){
            count++;
        }
    })
    return count;
}