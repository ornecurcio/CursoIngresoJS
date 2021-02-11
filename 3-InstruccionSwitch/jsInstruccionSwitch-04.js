
/*Ornela Curcio 
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	let mes; 
	let mensaje; 

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
      case"Febrero": 
	       mensaje = "Tiene 28 días"; 
		   break; 
	  case"Enero": 
	  case"Marzo": 
	  case"Mayo": 
	  case"Julio": 
	  case"Agosto": 
	  case"Octubre":
	  case"Diciembre": 
	       mensaje = "Tiene 31 días"; 
		   break; 
	  default: 
	       mensaje = "Tiene 30 días"; 
		   break; 
	}
	
	alert(mensaje); 



}//FIN DE LA FUNCIÓN