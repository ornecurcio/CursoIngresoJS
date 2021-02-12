/* Ornela Curcio Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: 
bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento
*/function mostrar()
{
	let estacion; 
	let lugar 
	let precio; 
	let mensaje; 
	let porcentaje; 
	

	precio = 15000; 
	porcentaje = 0; 
	estacion = document.getElementById("txtIdEstacion").value; 
	lugar = document.getElementById("txtIdDestino").value;  
	 

	switch(estacion)
	{
		case"Invierno": 
			switch(lugar)
			{
				case "Bariloche": 
			   			porcentaje = 20; 
			    		mensaje; 
			            break;  
				case "Mar del plata": 
			    		porcentaje = -20; 
						mensaje; 
			            break; 
				default:
						porcentaje = -10; 
						mensaje; 
						break; 
		    }
			break; 
		case"Verano": 
		    switch(lugar)
			{
				case "Bariloche": 
			    	porcentaje = -20; 
			    	mensaje; 
			    	break; 
				case "Mar del plata": 
			    	porcentaje = 20; 
					mensaje; 
			    	break; 
				default:
					porcentaje = 10; 
					mensaje; 
					break; 
			}
			break; 
		case"Otoño":
		case "Primavera":
	        switch(lugar)
			{
              case "Cordoba":
				 porcentaje = 0;  
			     mensaje; 
			     break;
			 default: 
			     porcentaje = 10; 
			     mensaje; 
			     break; 
			}
			break; 
	}
    mensaje = precio + (precio*porcentaje/100); 	   

    alert("El precio es "+ mensaje); 
}//FIN DE LA FUNCIÓN

//usar default.