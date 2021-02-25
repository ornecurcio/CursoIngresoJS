/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/

function mostrar()
{
    let numeroIngresado; 
	let numeroAnterior; 
	let contadorNumeroPrimo; 
	let limite; 
    
	numeroIngresado=prompt("Ingrese nuemero"); 
	limite=numeroIngresado/2; 

	for(numeroAnterior=2;numeroAnterior<limite;numeroAnterior++)
	{
          if(numeroIngresado%numeroAnterior==0)
		  {
            break; 
		  }	  
		  
		 for(numeroAnterior-1;numeroAnterior<limite;numeroAnterior--)  
	}
    
    if(numeroAnterior==limite)
	{
    	alert("es primo"); 
	}
	else
	{
		alert("no es primo"); 
	}
	
}//FIN DE LA FUNCIÓN