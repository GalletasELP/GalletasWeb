window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "15px 5px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "25px 5px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}


window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// body info

var lastPage = getCookie('ultimaPagVisitada');
if (lastPage != '') {
    var tab = lastPage + '-link';
    document.getElementById(tab).click();

} else {
    document.getElementById("intro-link").click();
}

function openInfo(evt, title, souce) {

    // LOADING DE LA GALLETA ---->
    var imgDiv = document.getElementById('loadCookie');
    if (imgDiv != null) {
        imgDiv.remove();
    }
    imgDiv = document.createElement('div');
    imgDiv.setAttribute("class", "lCookie");
    imgDiv.setAttribute("id", "loadCookie");
    var node = document.getElementById(title);
    node.appendChild(imgDiv);
    /////////////////////////////////

    //REGISTRAR DESDE DONDE HA CLICKEADO ---->

    if (souce == 'tablinks') {
        console.log("Has accedio a : ", title, " desde ", souce);
    }
    if (souce == 'page-link') {
        console.log("Has accedio a : ", title, " desde ", souce);
    }

    ////////////////////////////////////

    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(title).style.display = "block";
    evt.currentTarget.className += " active";

    ///// GUARDAR EN COOKIE LA ULTIMA PAGINA ACCEDIDAD

    setCookie('ultimaPagVisitada', title, 365);
    restore();
    ///////////////

}


let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// pag. html
$(document).ready(function () {

    $("#intro").load("intro_cookies.html");
    $("#tipoCookies").load("tipos_cookies.html");
    $("#formasConfigCookies").load("config_cookies.html");
    $("#normativasCookies").load("normativas_cookies.html");
    $("#protegerseCookies").load("proteccion_cookies.html");

});


var clickeable1 = document.getElementsByClassName('tablinks');
for (let i = 0; i < clickeable1.length; i++) {
    clickeable1[i].addEventListener('click', printCookie);
}
var clickeable2 = document.getElementsByClassName('page-item');
for (let i = 0; i < clickeable2.length; i++) {
    clickeable2[i].addEventListener('click', printCookie);
}
