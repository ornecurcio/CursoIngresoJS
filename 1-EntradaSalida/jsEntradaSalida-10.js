/*Ornela Curcio
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
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
