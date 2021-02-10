/*Ornela Curcio
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*function mostrarAumento()
{ 
	let importe; 
	let descuento; 
	let resultado; 

	importe = document.getElementById("txtIdImporte").value; 
	importe = parseInt(importe); 

	descuento = importe / 4; 
	descuento = parseInt(descuento); 

	resultado = importe - descuento; 

	document.getElementById("txtIdResultado").value = resultado;
	
	console.log(resultado); 

} 
*/

/*Ornela Curcio
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"*/
/*function mostrarAumento()

{
  let importe; 
  let descuentoUno;
  let descuentoDos;  
  let resultado; 

  importe = document.getElementById("txtIdImporte").value; 
  importe = parseInt(importe); 

  descuentoUno = prompt("Ingrese un porcentaje de descuento deseado como numero entero "); 
  
  descuentoUno = parseInt(descuentoUno); 
  descuentoUno = descuentoUno /100; 
  
  descuentoDos = importe * descuentoUno; 
  resultado = importe - descuentoDos; 

  document.getElementById("txtIdResultado").value = resultado	;

}*/

/*2- Ornela Curcio
en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto ,
el importe y tambien se debe pedir el porcentaje de descuento al usuario, 
mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX" */

function mostrarAumento()
{
  let nombreProducto; 
  let importe; 
  let descuento; 
  let resultado; 

  nombreProducto = prompt("Nombre de Producto"); 

  importe = document.getElementById("txtIdImporte").value; 
  importe = parseInt(importe); 

  descuento = prompt("Descuento"); 
  descuento = parseInt(descuento); 

  resultado = importe - importe*(descuento/100); 

document.getElementById("txtIdResultado").value = ("Usted compro " +nombreProducto+" con "+descuento+"% de descuento, el precio final es "+resultado);


}
