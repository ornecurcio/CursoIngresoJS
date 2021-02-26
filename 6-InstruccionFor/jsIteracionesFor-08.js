/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/

function mostrar()
{
    let numeroIngresado; 
	let numeroAnterior; 
	let contadorDivisores; 
	let contadorNumerosPrimos; 
	let limite; 
    
	contadorDivisores = 0;
	contadorNumerosPrimos = 0; 
	numeroIngresado=prompt("Ingrese nuemero"); 
	limite=numeroIngresado/2; 

	for(numeroAnterior=2;numeroAnterior<limite;numeroAnterior++)
	{
          if(numeroIngresado%numeroAnterior==0)
		  {
            break; 
		  }	  
		  
		  for(contador=2;contador<numeroIngresado;contador++)
		  {  
			 if(numeroIngresado%contador==0)
			 {
				  contadorDivisores = contadorDivisores + 1;			
			 }
			 if(contadorDivisores==2)
			 {
				 contadorNumerosPrimos = contadorNumerosPrimos+1; 
			 }
		  }
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