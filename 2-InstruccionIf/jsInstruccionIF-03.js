
/*Ornela Curcio 
Al ingresar una edad debemos informar si la persona es mayor de edad,
 sino informar que es un menor de edad*/

function mostrar()
{  // INICIO DE FUNCION
	//tomo la edad  
	let edad; 

	edad = document.getElementById("txtIdEdad").value; 
	edad = parseInt(edad); 
	
	if(edad>17)
	{
		alert("La persona es mayor de edad")
	}
	else
	{
		alert("La persona es menor de edad")
	}

	// por cada else, hay un solo if, pero puede haber mas de un if 

	/*if(edad<18)
	{
		alert("La persona es menor de edad")
	}*/

	/* otra solucion es: 

	let edad; 

	edad = document.getElementById("txtIdEdad").value; 
	edad = parseInt(edad); 
	
	if(edad>17)
	{
		alert("La persona es mayor de edad")
	}
	alert("La persona es menor de edad")//
	aunque aca lo ejecuta igual aunq no ponga edad,
	 funciona, no es lo correcto  */

} // FIN DE LA FUNCION