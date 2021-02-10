/* Ornela Curcio 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
/*function mostrar()
{
	let nombre; 

	nombre = prompt("Ingrese su nombre"); 

	document.getElementById("txtIdNombre").value = nombre; 
	
}*/

/* Profesor 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'

function mostrar()
{
	var nombre;
	var mensajeDeRespuesta;

	nombre= prompt("ingrese nombre");

	mensajeDeRespuesta="su nombre es : "+nombre;
	
	document.getElementById('txtIdNombre').value=mensajeDeRespuesta;//mostrando 
	
	de esta forma se desglosan los pasos*/

	//document.getElementById("txtIdNombre").value = nombre // muestra el valor 
	//nombre = document.getElementById("txtIdNombre").value // toma el valor

/*1. Ornela Curcio  
Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 4 para resolverlo.*/

function mostrar()
{

let descripcion; 
let precio; 

precio = document.getElementById("txtIdNombre").value; 
precio = precio * 0.3;

descripcion = prompt("Nombre el producto");

alert(descripcion + " " + precio ); 
}