/*Ornela Curcio
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	

	let destino; 
	let mensaje; 

	destino = document.getElementById("txtIdDestino").value; 

	switch(destino)
	{
      case"Bariloche": 
	  case "Ushuaia":
		  mensaje = "Frio"; 
		  break     
	  default: 
	       mensaje = "Calor"; 
		   break; 
	}
	alert(mensaje);
}

//FIN DE LA FUNCIÓN