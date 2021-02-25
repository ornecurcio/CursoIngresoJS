/*al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{	
	let numeroIngresado; 
	let contadorDivisores; 
	let contador; 

	contadorDivisores=0; 
	numeroIngresado = prompt("Ingrese un numero"); 
	numeroIngresado = parseInt(numeroIngresado); 

	for(contador=1;contador<numeroIngresado;contador++)
	{  
		
	   if(numeroIngresado%contador==0)
	   {
		    contadorDivisores=contadorDivisores+1;
			console.log(contador); 
		    
		   console.log("total de numeros pares: "+contadorDivisores);  
	
	}


}//FIN DE LA FUNCIÓN