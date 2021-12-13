window.onload = () => {
    checkCookieVisita();
    document.getElementById("crearCookie").addEventListener("click", crearModifCookieUser);

}

let usuario = getCookie('user');
let bienvenido = document.getElementById('welcome');
let bienvenido_2 = document.getElementById('welcome_2');
let bienvenido_3 = document.getElementById('welcome_3');
let div = document.getElementById('glass');
let aceptar_cookies = false;


function checkCookieVisita() {
    let visit = (document.cookie.indexOf('visita=') === -1 ? '' : ("; " + document.cookie).split('; visita=')[1].split(';')[0]);
    visit++;
    if (usuario.length === 0 && aceptar_cookies === false) {
        //crearModifCookieUser();
        bienvenido.innerHTML = 'Hola, Bienvenido! ';
        bienvenido_2.innerHTML = 'Para dar comienzo al proyecto, se ha simulado un básico aviso sobre las cookies de las que se encuentran en un sitio web, ' +
            'avisando del tratamiento y utilización de dichas cookies. De esta forma se está cumpliendo con la ley en base a proteger la privacidad de los usuarios.';
        bienvenido_3.innerHTML = '*para continuar, pulse el botón "I agree"…';
        div.innerHTML = '<div class="col-md-4 col-sm-12 button-fixed">\n' +
            '                        <div class="p-3 pb-4 bg-custom text-white">\n' +
            '                            <div class="row">\n' +
            '                                <div class="col-10">\n' +
            '                                    <h2>Permitir cookies</h2>\n' +
            '                                </div>\n' +
            '                                <div class="col-2 text-center">\n' +
            '                                    <i class="fas fa-times"></i>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <p>🍪 Usamos cookies para asegurarnos de que obtenga la mejor experiencia en nuestro sitio web. </p>\n' +
            '                            <a  class="btn btn-danger w-100" id="crearCookie" href="#infoBody">I agree</a>\n' +
            '                        </div>\n' +
            '                    </div>';

        ocultarDiv();
    } else {
        bienvenido.innerHTML = 'Nos alegra verte de nuevo...';
        bienvenido_2.innerHTML = 'Has visitado este sitio ' + visit + ' veces.</b>';
        

    }
    
    setCookie('visita', visit, 365);
}

function crearModifCookieUser() {

    let numAleatorio = Math.floor(Math.random() * 100);
    let valor = "usuario-" + numAleatorio;
    let nombre = 'user';
    /*let valor = document.getElementById('userName').value;*/

    let expiracion = 365;
    setCookie(nombre, valor, expiracion);
    getUserInfo();

    location.reload();
    // actualizar();
}

function getUserInfo() {

    let expiracion = 365;
    let navegador = getNavegador();
    let plataforma = sistemaOperativo();

    setCookie('navegador', navegador, expiracion);
    setCookie('plataforma', plataforma, expiracion);
    setCookie('idioma', window.clientInformation.language, expiracion);

}

function sistemaOperativo() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("win") != -1) {
        return "Windows";
    } else if (ua.indexOf("mac") != -1) {
        return "MAC";
    } else if (ua.indexOf("linux") != -1) {
        return "Linux";
    } else if (ua.indexOf("x11") != -1) {
        return "Unix";
    } else {
        return "No reconocido";
    }
}

function getNavegador() {

    // Detectar navegador
    let userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/edg/i)) {
        browserName = "edge";
    } else if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "firefox";
    } else if (userAgent.match(/safari/i)) {
        browserName = "safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "opera";
    } else {
        browserName = "No reconocido";
    }


    return browserName;

}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=./ ; Secure";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function verCookies() {
    alert("Cookies actuales:\n" + document.cookie);
}


function ocultarDiv() {
    document.getElementById('infoBody').style.display = 'none';
    document.getElementById('ocultar').style.display = 'none';
    document.getElementById('img_ocultar').style.display = 'none';

}

// function actualizar(){
//
//     document.getElementById('ini').load('index.html');
//
// }
