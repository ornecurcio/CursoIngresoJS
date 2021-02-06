/*Ornela Curcio 
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años). */
function mostrar()
{
	let edad; 

	edad = document.getElementById("txtIdEdad").value; 
	edad = parseInt(edad); 
	//>18 
	//13 y 17 
	//<13 menos  
	
	/*if(edad>18)
    { 
	   alert("Usted es Mayor de edad");  
    }
	if(edad<13)
	{
		alert("Usted es Niño");
	}
	else // esto esta mal, porque sale doble cartel. 
	{
		alert("Usted es adolescente");
	} 
	/*if(edad<13)
	{
		alert("Usted es menor de edad");
	}
	if(edad>12&&edad<18)
	{
		alert("Usted es adolescente");
	}
	if(edad>18)
	{
		alert("Usted es mayor de edad");
	} */// esto funciona pero esta mal programado 

	if(edad<13)
	{
		alert("Usted es menor de edad");
	}
	else 
	{
	    if(edad>17)
	       {
		       alert("Usted es mayor de edad");
	       }
		else
		   {
			   alert("Usted es adolescentes")
		   }
		
   } // ESTA ES LA FORMA CORRECTA! 
}//FIN DE LA FUNCIÓN

