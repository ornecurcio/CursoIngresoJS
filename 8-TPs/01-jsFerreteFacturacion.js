/*1.	Ornela Ivana Curcio 
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno; 
    let precioDos; 
    let precioTres; 
    let resultado; 

    precioUno = document.getElementById("txtIdPrecioUno").value; 
    precioUno = parseInt(precioUno); 

    precioDos = document.getElementById("txtIdPrecioDos").value; 
    precioDos = parseInt(precioDos); 

    precioTres = document.getElementById("txtIdPrecioTres").value; 
    precioTres = parseInt(precioTres); 

    resultado = precioUno + precioDos + precioTres; 

    console.log(resultado); 
    alert(resultado); 


}
function Promedio () 
{
	let precioUno; 
    let precioDos; 
    let precioTres; 
    let resultado; 
    let promedio

    precioUno = document.getElementById("txtIdPrecioUno").value; 
    precioUno = parseInt(precioUno); 

    precioDos = document.getElementById("txtIdPrecioDos").value; 
    precioDos = parseInt(precioDos); 

    precioTres = document.getElementById("txtIdPrecioTres").value; 
    precioTres = parseInt(precioTres); 

    resultado = precioUno + precioDos + precioTres; 

    promedio = resultado / 3; 

    console.log(promedio); 
    alert(promedio); 
}
function PrecioFinal () 
{
	let precioUno; 
    let precioDos; 
    let precioTres; 
    let resultado; 
    let resultadoIva; 
    let resultadoFinal

    precioUno = document.getElementById("txtIdPrecioUno").value; 
    precioUno = parseInt(precioUno); 

    precioDos = document.getElementById("txtIdPrecioDos").value; 
    precioDos = parseInt(precioDos); 

    precioTres = document.getElementById("txtIdPrecioTres").value; 
    precioTres = parseInt(precioTres); 

    resultado = precioUno + precioDos + precioTres; 
  
    resultadoIva = resultado * 0.21; 

    resultadoFinal = resultado + resultadoIva; 

    alert(resultadoFinal); 
}