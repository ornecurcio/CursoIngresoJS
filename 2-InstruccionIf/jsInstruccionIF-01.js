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

	/*valordeverdad=edad==15;
   if(valordeverdad)
   {
	   alert("verdadero");         esta forma no se debe usar , en el if, 
	                                no va una vairable nueva en el if
   }
   else
   {
       alert("falso");
   }*/

   

}//FIN DE LA FUNCIÓN