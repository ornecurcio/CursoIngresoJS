/* Ornela Curcio
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0; 
	let contadorNegativos = 0; 
	let contadorPositivos = 0; 
	let contadorCeros = 0; 
	let contadorPares = 0; 
	let promedioNegativos = 0; 
    let promedioPositivos = 0; 
	let diferencia; 
	
	respuesta="si";

	while(respuesta=="si")
	{ 
	    numeroIngresado = prompt("Ingrese un numero"); 
		numeroIngresado = parseInt(numeroIngresado); 	
        while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado = prompt("Error, ingrese un numero: "); 
			numeroIngresado = parseInt(numeroIngresado); 
		}
		if(numeroIngresado>0) //positivos
		{
           contadorPositivos = contadorPositivos + 1; 
		   sumaPositivos = sumaPositivos + numeroIngresado; 
		}
		else if(numeroIngresado==0)
		{
           contadorCeros = contadorCeros + 1; 
		}
		else //negativos
		{
           contadorNegativos = contadorNegativos + 1; 
		   sumaNegativos = sumaNegativos + numeroIngresado; 
		}
		if(numeroIngresado%2==0)
		{
		   contadorPares = contadorPares + 1; 
		}
		respuesta=prompt("desea continuar?");
	}//fin del while
	if(contadorPositivos!=0)
	{
		promedioPositivos = sumaPositivos/contadorPositivos; 	 
	}
	if(contadorNegativos!=0)
	{
        promedioNegativos = sumaNegativos/contadorNegativos;
	}
	diferencia = sumaPositivos + sumaNegativos; 
     
	console.log("La suma de los negativos es "+sumaNegativos); 
	console.log("La suma de los positivos es "+sumaPositivos); 
	console.log("La cantidad de Positivos es "+contadorPositivos); 
	console.log("La cantidad de Negativos es "+contadorNegativos); 
	console.log("La cantidad de Ceros es "+contadorCeros); 
	console.log("La cantidad de Pares es "+contadorPares); 
	console.log("El promedio de Positivos es "+promedioPositivos); 
	console.log("El promedio de Negativos es "+promedioNegativos); 
	console.log("La diferencia es "+diferencia); 
	//document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN

