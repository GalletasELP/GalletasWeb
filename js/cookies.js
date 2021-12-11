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
    getLocation();

}

function getLocation(){

    ///
  
    var country;
    var city;
    var zip;
    var ip;

    var endpoint = 'http://ip-api.com/json/?fields=country,city,zip,query';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            country = response.country;
            city = response.city ;
            zip = response.zip  ;
            ip = response.query ;
        }
    };
    xhr.open('GET', endpoint, true);
    xhr.send();

    ///

    let expiracion = 365;

    setCookie('pais', country, expiracion);
    setCookie('ciudad', city, expiracion);
    setCookie('codigo postal', zip, expiracion);
    setCookie('ip', ip, expiracion);



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
