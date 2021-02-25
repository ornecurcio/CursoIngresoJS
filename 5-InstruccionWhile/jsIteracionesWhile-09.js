/*Ornela Curcio
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*function mostrar()
{	// declarar variables
	let banderaDelPrimero;//3 partes, inicializacion, validacion, cambio. 
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let valordeVerdad; 
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero: "); 
		numeroIngresado = parseInt(numeroIngresado); 
		valordeVerdad = isNaN(numeroIngresado); 
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado = prompt("Error, ingrese un numero: "); 
			numeroIngresado = parseInt(numeroIngresado); 	
		}
		
		if(banderaDelPrimero == "es el primero")
		{
			numeroMinimo = numeroIngresado; 
			numeroMaximo = numeroIngresado; 
			banderaDelPrimero = "NO, no es el primero"//cambio la variable apenas se inicializo.
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado; 
			}
	
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado; 
			}	
		}
		
		respuesta=prompt("desea continuar?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo; 
}//FIN DE LA FUNCIÓN*/

//Ornela Curcio while 09(el menor de los pares y el mayor de los negativos ...solo si hay)
//Al presionar el botón pedir números hasta que el usuario quiera, 
function mostrar()
{
	let numeroIngresado;
	let menorNumeroParIngresado;
	let mayorNumeroNegativoIngresado;
	let respuesta; 
	let baderaNumeroPar; 
	let banderaNegativo; 

	banderaNumeroPar = 1;
	banderaNegativo = 1; 
	
    
	for(respuesta="si";respuesta=="si";respuesta=prompt("desea continuar?"))
	{
        numeroIngresado=prompt(numeroIngresado); 
		if(numeroIngresado%2==0)
		{
			if(banderaNumeroPar==1) 		
			{
				menorNumeroParIngresado = numeroIngresado; 
				banderaNumeroPar = 0;
			}
			else
			{
				if(numeroIngresado<menorNumeroParIngresado)
				{
                  menorNumeroParIngresado = numeroIngresado; 
				}
			}	
		}

		if(numeroIngresado<0)
		{
			if(banderaNegativo==1) 		
			{
				mayorNumeroNegativoIngresado = numeroIngresado; 
				banderaNegativo = 0; 
			}
			else
			{
				if(numeroIngresado>mayorNumeroNegativoIngresado)
				{
                  mayorNumeroNegativoIngresado = numeroIngresado; 
				}
			}	
		}
		
		console.log(menorNumeroParIngresado); 
		console.log(mayorNumeroNegativoIngresado); 
		
	}

	

  }
  

