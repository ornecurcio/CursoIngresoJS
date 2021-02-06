/* Ornela Curcio 
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.' 
*/
function mostrar()
{
	//<18 y != soltero
	let estado;  
	let edad; 
	
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad); 

	estado = document.getElementById("estadoCivil").value;

	if(edad<18 && estado!="Soltero")
	{
		alert("Usted es muy pequeño para NO ser Soltero")
	}
	


	/*if(edad)
	{

	}*/

	


}//FIN DE LA FUNCIÓN

/*// Obtener la referencia a la lista
var lista = document.getElementById("opciones");

// Obtener el índice de la opción que se ha seleccionado
var indiceSeleccionado = lista.selectedIndex;

// Con el índice y el array "options", obtener la opción seleccionada
var opcionSeleccionada = lista.options[indiceSeleccionado];

// Obtener el valor y el texto de la opción seleccionada
var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = opcionSeleccionada.value;
alert("Opción seleccionada: " + textoSeleccionado + "\n Valor de la opción: " + valorSeleccionado);
*/