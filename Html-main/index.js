
/* FUNCIONES DEL INDEX */

function alta(){
    let usuario=document.getElementById("usuario").value;
    let clave=document.getElementById("clave").value;

    if (usuario=="gula" && clave=="123"){
        window.location.href="registro.html"
    }else{
        alert("Contraseña Incorrecta")
    }
}

/* FUNCIONES DEL REGISTRO*/
function enviar(){
    
    window.location.href="pedidofinalizado.html"
}


function volver(){

    window.location.href="PaginaPrincipal.html";
}