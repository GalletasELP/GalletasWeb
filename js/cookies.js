window.onload = () => {
    checkCookieVisita();
    document.getElementById("crearCookie").addEventListener("click", crearModifCookieUser);

}


let usuario = getCookie('user');
let bienvenido = document.getElementById('welcome');
let bienvenido_2 = document.getElementById('welcome_2');
let bienvenido_3 = document.getElementById('welcome_3');

function checkCookieVisita() {
    let visit = (document.cookie.indexOf('visita=') === -1 ? '' : ("; " + document.cookie).split('; visita=')[1].split(';')[0]);

    if (usuario.length === 0) {
        crearModifCookieUser();
        /*bienvenido.innerHTML = '<b>Hi, Bienvenido!  </b>';
        bienvenido_3.innerHTML = 'Para empezar, ingresa un usuario: ';
        ocultarDiv();*/
    } else {
        bienvenido.innerHTML = usuario + '...';
        bienvenido_2.innerHTML = 'Has visitado este sitio ' + visit + ' veces.</b>';
        bienvenido_2.innerHTML = '<button class="btn-success" onClick="verCookies()">Ver Cookies</button>';

        ocultar();
    }
    visit++;
    setCookie('visita', visit, 365);
}

function crearModifCookieUser() {
    location.reload();
    let numAleatorio = Math.floor(Math.random() * 100);
    let valor = "usuario-" + numAleatorio;
    let nombre = 'user';
    /*let valor = document.getElementById('userName').value;*/

    let expiracion = 365;
    setCookie(nombre, valor, expiracion);
    getUserInfo();
    //getLocation();

}

function getUserInfo(){
    
    let expiracion = 365;
    let navegador = getNavegador();
    let plataforma = sistemaOperativo();
    
    setCookie('navegador', navegador , expiracion);
    setCookie('plataforma', plataforma , expiracion);
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
function getNavegador(){

   // Detectar navegador
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/edg/i)){
        browserName = "edge";
    }
    else if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
    }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
    }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
    }else if(userAgent.match(/opr\//i)){
        browserName = "opera";
    }else{
        browserName="No reconocido";
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
    for(let i = 0; i < ca.length; i++) {
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

document.getElementById("verCookies").addEventListener("click", verCookies);

function verCookies() {
    alert("Cookies actuales:\n" + document.cookie);
}

function ocultar() {
    document.getElementById('ocultar').style.display = 'none';
}

function ocultarDiv() {
    document.getElementById('partI').style.display = 'none';
    document.getElementById('infoBody').style.display = 'none';
}
