
let total=0;

function sumarPrecio(precio, boton){
    

    if((total>=0)){
        total= total + precio;
        document.getElementById("total").textContent ="$" + total;
    }

    /* contador del boton suma */
    let contador = boton.nextElementSibling;
    let cantidad = parseInt(contador.innerText);
    cantidad++;
    contador.innerText = cantidad;
}

function restarPrecio(menos, boton){

    
    /* contador del boton resta*/
    let contador = boton.previousElementSibling;
    let cantidad = parseInt(contador.innerText);

    if(cantidad>0){
        cantidad--;
        contador.innerText = cantidad;   

        total=total-menos;
        document.getElementById("total").textContent = "$" + total;
    }
    

}

function Descuento(){

    let descuento=document.getElementById("descuento").value;
    if(descuento=="15off")
        {
        descuento= total-(0.15*total);
        document.getElementById("total").textContent = "$" + descuento;
    }

    if(descuento=="50off")
        {
        descuento= total-(0.50*total);
        document.getElementById("total").textContent = "$" + descuento;
    }
    if(descuento=="75off")
        {
        descuento= total-(0.75*total);
        document.getElementById("total").textContent = "$" + descuento;
    }
    if(descuento=="free")
        {
        descuento= total-total;
        document.getElementById("total").textContent = "$" + descuento;
    }
    else{
        alert("No es un cupón valido")
    }
}

function pedido(){ 
    window.location.href = "index.html"; 
}

