/* Ornela Curcio
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el 
precio final con descuento por id.*/
function mostrar()
{
let precioIngresado; 
let descuentoIngresado; 
let precioFinal; 

precioIngresado = prompt("Ingrese precio de producto"); 
precioIngresado = parseFloat(precioIngresado); 
while(isNaN(precioIngresado)==true || precioIngresado<0.01)
{
    precioIngresado = prompt("Error, ingrese precio de producto"); 
    precioIngresado = parseFloat(precioIngresado);  
}

descuentoIngresado = prompt("Ingrese descuento desceado"); 
descuentoIngresado = parseFloat(descuentoIngresado); 
while(isNaN(descuentoIngresado)==true || descuentoIngresado<1 || descuentoIngresado>99)
{
    descuentoIngresado = prompt("Error, ingrese descuento de producto"); 
    descuentoIngresado = parseFloat(precioIngresado);  
}

precioFinal = precioIngresado - precioIngresado*descuentoIngresado/100; 

document.getElementById("elPrecioFinal").value = precioFinal; 
}
