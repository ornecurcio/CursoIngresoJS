/* Ornela Curcio
Al ingresar una edad que sea igual a 15, 
mostrar el mensaje "niña bonita".*/
function mostrar()
{
	//tomo la edad 
	let edad; 

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	 
	if(edad==15) // no se debe cerrar el if no punto y coma sino se bloquea. 
    { 
	   alert ("niña bonita");  
    }
   
     
}//FIN DE LA FUNCIÓN