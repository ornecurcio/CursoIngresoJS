/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/

function mostrar()
{
    let numeroIngresado; 
	let numeroAnterior; 

	numeroIngresado=prompt("Ingrese nuemero"); 

	for(numeroAnterior=2;numeroAnterior<numeroIngresado;numeroAnterior++)
	{
          if(numeroIngresado%numeroAnterior==0)
		  {
            break; 
		  }
		  
	}

    if(numeroAnterior==numeroIngresado)
	{
    	alert("es primo"); 
	}
	else
	{
		alert("no es primo"); 
	}
	if(numeroAnterior!=numeroIngresado)
	{
		alert("no es primo"); 
	}
    else
	{
		alert("es primo"); 
	}
}//FIN DE LA FUNCIÓN