
/*Ornela Curcio 
Al ingresar una edad debemos informar si la persona es mayor de edad,
 sino informar que es un menor de edad*/

function mostrar()
{
	//tomo la edad  
	let edad; 

	edad = document.getElementById("txtIdEdad").value; 
	edad = parseInt(edad); 
	
	if(edad>17)
	{
		alert("La persona es mayor de edad")
	}
    
	if(edad<18)
	{
		alert("La persona es menor de edad")
	}

}//FIN DE LA FUNCIÓN