/*Ornela Curcio
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.el menor de los pares y el mayor de los negativos ...solo si hay)*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;//3 partes, inicializacion, validacion, cambio. 
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let menorNumeroParIngresado;
	let mayorNumeroNegativoIngresado;
	let baderaNumeroPar; 
	let banderaNegativo;
	let respuesta;
	 
	//iniciar variables
	banderaDelPrimero="es el primero";
	banderaNumeroPar = 1;
	banderaNegativo = 1; 
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
		respuesta=prompt("desea continuar?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo; 
	console.log(menorNumeroParIngresado); 
	console.log(mayorNumeroNegativoIngresado); 
}//FIN DE LA FUNCIÓN*/



