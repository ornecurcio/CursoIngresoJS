/*Ornela Curcio
Al selecionar un destino , indicar el punto 
cardinal de nuestro pais en donde se encuentra Norte,
 Sur, Este u Oeste*/
function mostrar()
{
	let destino; 
	let mensaje; 

	destino = document.getElementById("txtIdDestino").value; 

	switch(destino)
	{
      case"Bariloche": 
	       mensaje = "Este"; 
		   break; 
	  case "Cataratas":
		   mensaje = "Norte"; 
		   break;  
	  case "Ushuaia":
	       mensaje = "Sur";  
		   break; 
	  case "Mar del plata": 
	       mensaje = "Oeste"; 
		   break; 
	}

	alert(mensaje); 
}//FIN DE LA FUNCIÓN