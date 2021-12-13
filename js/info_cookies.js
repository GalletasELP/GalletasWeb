
function getInfo(){
    var node = document.getElementById('cookie_table');

    let usuario = getCookie('user');
    var htmltext;

    htmltext = '<h3>Te tenemos identificado como : '+usuario+'</h3>';
    htmltext += '<p>En las cookies hemos guardado la siguiente información sobre ti :) </p>';
    htmltext += '<table class="table table-striped bg-light"><tr><th>Nombre</th><th>Valor</th><th>Significado</th></tr>';

    var nombresCookies = ['user','visita','navegador','plataforma','idioma'];

    for(let i = 0; i < nombresCookies.length ; i++){

        var galleta = getCookie(nombresCookies[i]);

        if(galleta != ''){
            htmltext +='<tr>';

            htmltext +='<td>';
            htmltext +=nombresCookies[i];
            htmltext +='</td>';

            htmltext +='<td>';
            htmltext +=galleta;
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
   }

    return texto;
}


function restore(){
    var textohtml = '<button type="button" class="btn btn-success btn_mostrar" onclick="getInfo()" >Ver cookies</button>';
    $("#cookie_table").empty();
    $('#cookie_table').html(textohtml);
}