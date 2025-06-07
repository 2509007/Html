
let total=0;

function sumarPrecio(precio){
    if((total>=0)){
    total= total + precio;
    document.getElementById("total").textContent ="$" + total;
} 
}
function restarPrecio(menos){

    if(total>0){
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
}

function pedido(){ 
    window.location.href = "FormadePago.html"; 
}