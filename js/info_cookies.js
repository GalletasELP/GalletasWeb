
function getInfo(){
    var node = document.getElementById('cookie_table');

    let usuario = getCookie('user');
    var htmltext;

    htmltext = '<h3>Te tenemos identificado como : '+usuario+'</h3>';
    htmltext += '<p>En las cookies hemos guardado la siguiente información sobre ti :) </p>';
    htmltext += '<table class="table table-striped bg-light"><tr><th>Nombre</th><th>Valor</th><th>Significado</th></tr>';

    var nombresCookies = ['user','visita','navegador','plataforma','idioma','ultimaPagVisitada'];

    for(let i = 0; i < nombresCookies.length ; i++){

        var galleta = getCookie(nombresCookies[i]);

        if(galleta != ''){
            htmltext +='<tr>';

            htmltext +='<td>';
            htmltext +=nombresCookies[i];
            htmltext +='</td>';

            htmltext +='<td>';
            if(nombresCookies[i] == 'ultimaPagVisitada'){
              var pagina = translatePage(galleta);
              htmltext +=pagina;
            }else{
                htmltext +=galleta;
            }
            htmltext +='</td>';

            var texto = textoGalleta(nombresCookies[i]);
            htmltext +='<td>';
            htmltext +=texto;
            htmltext +='</td>';

            htmltext +='</tr>';
        }
    }



    htmltext +='</table>';

    htmltext +='<button type="button" class="btn btn-danger btn_mostrar" onclick="restore()"> Cerrar </button>';

    $('#cookie_table').html(htmltext);

}

function textoGalleta(nombre){
    var texto = '';

    if(nombre =='user' ){
        texto = '<p>Esta cookie contiene el identificador que te damos para reconocerte cuando vuelvas a visitar nuestra pagina</p>';
    }else if(nombre == 'visita' ){
        texto = '<p>Esta cookie contiene el numero de veces que has visitado nuestra página</p>';
    }else if(nombre == 'navegador'){
        texto = '<p>Esta cookie contiene el navegador que estas usando actualmente para visitar nuestra página</p>';
    }else if(nombre == 'plataforma'){
         texto = '<p>Esta cookie contiene el sistema operativo que estas usando para visitar nuestra página</p>';
    }else if(nombre == 'idioma'){
         texto = '<p>Esta cookie contiene el idioma que usas en tu dispositivo</p>';
   }else if(nombre == 'ultimaPagVisitada'){
        texto = '<p>Esta cookie contiene la ultima pestaña visitada de nuestra pagina, para que cuando vuelvas a visitarla puedas continuar donde lo dejaste</p>';
   }

    return texto;
}

function translatePage(tab){
    var page = '';

    if(tab=="intro"){
        page = '¿Que son las Cookies?';
    }else if(tab=="tipoCookies"  ){
        page = 'Tipos de Cookies';
    }else if(tab=="formasConfigCookies" ){
        page = 'Formas que ofrecen distintas paginas para configurar las cookies';
    }else if(tab=="normativasCookies" ){
        page = 'Normativas de las cookies';
    }else if(tab=="protegerseCookies" ){
        page = '¿Como protegerse de las cookies?';
    }


    return page;
}

function restore(){
    var textohtml = '<button type="button" class="btn btn-success btn_mostrar" onclick="getInfo()" >Ver cookies</button>';
    $("#cookie_table").empty();
    $('#cookie_table').html(textohtml);
}
