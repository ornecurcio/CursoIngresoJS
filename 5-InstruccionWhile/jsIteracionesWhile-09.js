/*Ornela Curcio
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;//3 partes, inicializacion, validacion, cambio. 
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero: "); 
		numeroIngresado = parseInt(numeroIngresado); 
		banderaDelPrimero = "NO, no es el primero"//cambio la variable apenas se inicializo. 
        
		if(banderaDelPrimero == "es el primero")
		{
			numeroMinimo = numeroIngresado; 
			numeroMaximo = numeroIngresado; 
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
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN