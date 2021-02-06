/* Ornela Curcio 
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.' 
*/
function mostrar()
{
	//>18 y != soltero
	let Divorciado; 
	let Casado; 
	let Soltero; 
	let edad; 
	
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad); 

	Divorciado = document.getElementsByName("Divorciado").value; 
	//Casado = document.getElementById("Casado".value); 
	//Soltero = document.getElementById("Soltero").value; 

	alert(Divorciado);


	/*if(edad)
	{

	}*/

	

}//FIN DE LA FUNCIÓN